import React from "react";
import Banner from "./Components/Banner/Banner";
import CategoriestoBuy from "./Components/CategoriestoBuy/CategoriestoBuy";
import LatestProduct from "./Components/LatestProduct/LatestProduct";
import Products from "./Components/Products/Products";


const Home = () => {
  return (
    <div className="max-w-[1140px] mx-auto">
      <Banner></Banner>
      <CategoriestoBuy></CategoriestoBuy>
      <LatestProduct></LatestProduct>
      <Products></Products>
    </div>
  );
};

export default Home;
