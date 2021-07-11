import React from "react";
import CustomChoosing from "./CustomChoosing";
import DesingContent from "./DesingContent";
import Discounts from "./Discounts";
import FeaturedProducts from "./FeaturedProducts";

export default function Home() {
  return (
    <>
      <DesingContent />
      <FeaturedProducts />
      <CustomChoosing />
      <Discounts />
    </>
  );
}
