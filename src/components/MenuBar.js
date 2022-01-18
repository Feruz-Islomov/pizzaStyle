import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const MenuBar = () => {
  return (
    <div id="menubar" className="menubar">
      <div>
        <img className="micon" src=".\photo\p12.png" alt="pizzaHut" />
        <AnchorLink offset="10" href="#pizza">
          Pizza
        </AnchorLink>
      </div>
      <div>
        <img className="micon" src=".\photo\burger2.png" alt="pizzaHut" />
        <AnchorLink offset="18" href="#burger">
          Burger
        </AnchorLink>
      </div>
      <div>
        <img className="micon" src=".\photo\s2.png" alt="pizzaHut" />
        <AnchorLink offset="18" href="#sauce">
          Sauce
        </AnchorLink>
      </div>
      <div>
        <img className="micon" src=".\photo\cake.png" alt="pizzaHut" />
        <AnchorLink offset="18" href="#dessert">
          Dessert
        </AnchorLink>
      </div>
      <div>
        <img className="micon" src=".\photo\coffee.png" alt="pizzaHut" />
        <AnchorLink offset="18" href="#drink">
          Drink
        </AnchorLink>
      </div>
    </div>
  );
};

export default MenuBar;
