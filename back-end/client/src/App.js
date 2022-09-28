import React from "react";
import R109_reactProxy from "./components/R109_reactProxy";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <h1>hi</h1>
      <p>hello</p>
      <Routes>
        <Route path="/reactProxy" element={<R109_reactProxy />} />
      </Routes>
    </div>
  );
};

export default App;
