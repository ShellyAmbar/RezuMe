import React from "react";
import "./NavBarScroll.css";
import { Links } from "./Links";

const NavBarScroll = () => {
  const handleClick = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    const component = document.querySelector(target);
    console.log(component);
    if (component != null) {
      const location = component.offsetTop;
      window.scrollTo({ top: location - 64, left: 0 });
      console.log(location);
    }
  };
  return (
    <nav className="navbar_scroll">
      <div className="navbar-container_scroll">
        {Links.map((link) => {
          return (
            <div
              className="link"
              key={link.id}
              href={link.url}
              onClick={handleClick}
            >
              {link.text}
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default NavBarScroll;
