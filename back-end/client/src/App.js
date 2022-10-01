import React from "react";
import R109_reactProxy from "./components/R109_reactProxy";

import { Routes, Route } from "react-router-dom";
import R110_ApiGetJson from "./components/R110_ApiGetJson";
import R111_ApiPostJson from "./components/R111_ApiPostJson";
import SoftwareList from "./SoftwareToolsManage/SoftwareList";

// css
import "./css/new.css";
import Header from "./components/Header/Header admin";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <h1>hi</h1>
      <p>hello</p>
      <Header />
      <Routes>
        <Route path="/reactProxy" element={<R109_reactProxy />} />
        <Route path="/ApiGetJson" element={<R110_ApiGetJson />} />
        <Route path="/ApiPostJson" element={<R111_ApiPostJson />} />
        <Route path="/SoftwareList" element={<SoftwareList />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
