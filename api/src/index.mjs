import "dotenv/config";
import express from "express";
import cors from "cors";
import nestedRouter from "./routers/nested.js";

const app = express();
app.use(cors());
app.use(express.json());

const apiRouter = express.Router();
const crudCrudBaseUrl = process.env.CRUD_CRUD_API_KEY?.trim()
  ? `https://crudcrud.com/api/${process.env.CRUD_CRUD_API_KEY.trim()}`
  : null;

function getCrudCrudUrl(resourcePath) {
  if (!crudCrudBaseUrl) {
    throw new Error("Missing CRUD_CRUD_API_KEY in api environment");
  }

  return `${crudCrudBaseUrl}${resourcePath}`;
}

class HttpError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

async function proxyCrudCrudRequest(resourcePath, options = {}) {
  const response = await fetch(getCrudCrudUrl(resourcePath), options);

  if (!response.ok) {
    const errorText = await response.text();
    throw new HttpError(
      response.status,
      errorText || `CrudCrud request failed with ${response.status}`,
    );
  }

  if (response.status === 204) {
    return null;
  }

  return response.json();
}

apiRouter.get("/", (req, res) => {
  res.json({ message: "API is running" });
});

apiRouter.get("/wishlist", async (req, res) => {
  try {
    const wishlist = await proxyCrudCrudRequest("/wishlist");
    res.json(wishlist);
  } catch (error) {
    res.status(502).json({ message: error.message });
  }
});

apiRouter.post("/wishlist", async (req, res) => {
  try {
    const createdWishlistItem = await proxyCrudCrudRequest("/wishlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });

    res.status(201).json(createdWishlistItem);
  } catch (error) {
    res.status(502).json({ message: error.message });
  }
});

apiRouter.delete("/wishlist/:id", async (req, res) => {
  const wishlistItemPath = `/wishlist/${req.params.id}`;

  try {
    await proxyCrudCrudRequest(wishlistItemPath, {
      method: "DELETE",
    });
    res.status(204).send();
  } catch (error) {
    if (error.status === 404) {
      // Treat missing records as already deleted to keep delete idempotent.
      res.status(204).send();
      return;
    }

    // Retry once for transient upstream gateway issues.
    try {
      await proxyCrudCrudRequest(wishlistItemPath, {
        method: "DELETE",
      });
      res.status(204).send();
      return;
    } catch (retryError) {
      if (retryError.status === 404) {
        res.status(204).send();
        return;
      }

      res.status(502).json({ message: retryError.message });
    }
  }
});

// Here is an example of optionally setting up nested routes. Replace it or delete as needed.
apiRouter.use("/nested", nestedRouter);

app.use("/api", apiRouter);
app.listen(process.env.PORT, () => {
  console.log(`API listening on port ${process.env.PORT}`);
});
