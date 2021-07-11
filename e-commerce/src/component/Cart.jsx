import React from "react";
import BackHomeBackground from "./BackHomeBackground";
import ContentCart from "./ContentCart";
export default function cart() {
  return (
    <>
      <BackHomeBackground state="cart" />
      <div className="container">
        <ContentCart />
      </div>
    </>
  );
}
