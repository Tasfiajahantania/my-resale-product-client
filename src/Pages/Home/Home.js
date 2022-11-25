import React from "react";
import Banner from "./Components/Banner/Banner";
import CategoriestoBuy from "./Components/CategoriestoBuy/CategoriestoBuy";
import Products from "./Components/Products/Products";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CategoriestoBuy></CategoriestoBuy>
      <Products></Products>
    </div>
  );
};

export default Home;
