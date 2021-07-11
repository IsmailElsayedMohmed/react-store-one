import Nav from "./Nav";
import ShowSideBar from "./ShowSideBar";
import React, { useState } from "react";
export default function Header() {
  const [showSlider, setShowSlider] = useState("close");
  const changeSlider = (state) => {
    setShowSlider(state);
  };
  return (
    <>
      <Nav changeSlider={changeSlider} />
      <ShowSideBar showSlider={showSlider} changeSlider={changeSlider} />
    </>
  );
}
