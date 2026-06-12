import React, { useState, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/AppRoutes.jsx";
import animationMp4 from "./assets/animation.mp4";

function IntroAnimation() {
  return (
    <div className="anime-holder">
      <video
        autoPlay
        loop
        playsInline
        controls
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      >
        <source src={animationMp4} type="video/mp4" />
      </video>
    </div>
  );
}
function App() {
  const [showIntro, setShowIntro] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 5000);
    return () => clearTimeout(timer);
  }, []);
  if (showIntro) {
    return <IntroAnimation />;
  }
  return (
    <div className="app-wrapper">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
