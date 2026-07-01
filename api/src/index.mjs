import "dotenv/config";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import knex from "./database_client.js";
import nestedRouter from "./routers/nested.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

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

async function proxyCrudCrudRequest(resourcePath, options = {}) {
  const response = await fetch(getCrudCrudUrl(resourcePath), options);

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      errorText || `CrudCrud request failed with ${response.status}`,
    );
  }

  if (response.status === 204) {
    return null;
  }

  return response.json();
}

// This is an example of how to set up a route. Replace it with your own.
apiRouter.get("/", async (req, res) => {
  // Here is an example of making a query to the database you set up:
  const query = "SELECT 'Hello, world!' AS message;";
  const result = await knex.raw(query);
  res.json(result);
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
  try {
    await proxyCrudCrudRequest(`/wishlist/${req.params.id}`, {
      method: "DELETE",
    });
    res.status(204).send();
  } catch (error) {
    res.status(502).json({ message: error.message });
  }
});

// Here is an example of optionally setting up nested routes. Replace it or delete as needed.
apiRouter.use("/nested", nestedRouter);

app.use("/api", apiRouter);
app.listen(process.env.PORT, () => {
  console.log(`API listening on port ${process.env.PORT}`);
});
