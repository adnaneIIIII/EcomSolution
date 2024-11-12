import React from "react";
import Hero from "../components/storefront/hero";
import CategorySelection from "../components/storefront/categorySelection";
import FeaturedProducts from "../components/storefront/FeaturedProducts";

function IndexPage() {
  return (
    <div>
      
      <CategorySelection />
      <FeaturedProducts/>
    </div>
  );
}

export default IndexPage;
