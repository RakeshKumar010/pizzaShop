import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/global/Layout";
const App = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};

export default App;
