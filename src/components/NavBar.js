// src/components/NavBar.js
import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linkElements = links.map((link) => (
    <a key={link} href={`#${link}`}>
      {link}
    </a>
  ));

  return <nav>{linkElements}</nav>;
}

export default NavBar;
