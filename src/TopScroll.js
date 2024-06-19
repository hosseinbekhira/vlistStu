import React, { useState } from "react";
import "./Topscroll.css";

function TopScroll() {
  const [isScroll, setisScroll] = useState(false);

  window.onscroll = () => {
    if (window.scrollY > 500) {
      setisScroll((isScroll) => true);
    } else {
      setisScroll(false);
    }
  };

  const handlClick = () => {
    window.scrollTo(null, 0);
  };

  return (
    <div
      className={isScroll ? "scroll-top activescroll" : "scroll-top"}
      onClick={handlClick}
    >
      <img className="img-top" src="/top.png" alt="img-top"></img>
    </div>
  );
}

export default TopScroll;
