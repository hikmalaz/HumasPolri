import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// component
import LandingPage from "./pages/landingpage/LandingPage";


function App() {
  return (
    <BrowserRouter>
      <div className="min-w-[100vw] min-h-full">

        <Routes>
          <Route>
            <Route path="/" element={<LandingPage />} />

          </Route>
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
