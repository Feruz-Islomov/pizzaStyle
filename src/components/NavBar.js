import React from "react";
import ScrollToTop from "react-scroll-to-top";
import AnchorLink from "react-anchor-link-smooth-scroll";

const NavBar = () => {
  return (
    <div id="home" className="navbar">
      <ScrollToTop smooth color="blue" style={{ textAlign: "center" }} />
      <div>
        <img className="logo" src=".\photo\pl1.png" alt="pizzaHut" />
      </div>
      <div className="navleft">
        <AnchorLink offset="8" href="/menubar">
          Menu
        </AnchorLink>
        <AnchorLink href="/contact">Contact</AnchorLink>
        <AnchorLink href="/contact">Firuz: 998 933 488 522</AnchorLink>
      </div>
    </div>
  );
};

export default NavBar;
