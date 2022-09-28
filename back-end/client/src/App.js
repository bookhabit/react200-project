import React from "react";
import R109_reactProxy from "./components/R109_reactProxy";

import { Routes, Route } from "react-router-dom";
import R110_ApiGetJson from "./components/R110_ApiGetJson";
import R111_ApiPostJson from "./components/R111_ApiPostJson";

const App = () => {
  return (
    <div className="App">
      <h1>hi</h1>
      <p>hello</p>
      <Routes>
        <Route path="/reactProxy" element={<R109_reactProxy />} />
        <Route path="/ApiGetJson" element={<R110_ApiGetJson />} />
        <Route path="/ApiPostJson" element={<R111_ApiPostJson />} />
      </Routes>
    </div>
  );
};

export default App;
