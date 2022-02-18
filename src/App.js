import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import NearestPage from "./routes/nearest_page";

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route
          path="/"
          element={<NearestPage title="Edvora" profile="Dhruv Singh" />}
        />
        <Route
          path="upcoming_rides"
          element={<NearestPage title="Edvora" profile="Dhruv Singh" />}
        />
      </Routes>
    </Suspense>
  );
};

export default App;
