import React from "react";
import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";
import Product from "./components/Product";
import Item from "./components/Item";

const ReactRouter = () => {
  return (
    <div>
      ReactRouter
      <hr />
      <Navigation />
      <hr />
      <Routes>
        <Route path="/home" element={ <Home/> } />
        <Route path="/about" element={<About/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/product" element={<Product/>}/>
        <Route path="/product/:name" element={<Item/>}/>
      </Routes>
    </div>
  );
};

export default ReactRouter;
