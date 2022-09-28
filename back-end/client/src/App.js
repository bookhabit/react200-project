import React from "react";
import R109_reactProxy from "./components/R109_reactProxy";

import { Routes, Route } from "react-router-dom";
import R110_ApiGetJson from "./components/R110_ApiGetJson";

const App = () => {
  return (
    <div className="App">
      <h1>hi</h1>
      <p>hello</p>
      <Routes>
        <Route path="/reactProxy" element={<R109_reactProxy />} />
        <Route path="/ApiGetJson" element={<R110_ApiGetJson />} />
      </Routes>
    </div>
  );
};

export default App;
