import NavBar from "./nav-bar/nav-bar";
import React from "react";
import "./header.scss";

function Header({ isHomePage, title, subtitle, image }) {
  let headerStyle = isHomePage ? "isHomePage" : "";
  const titleStyle = subtitle ? "hasSubTitle" : "";

  return (
    <header
      className={`header hasBackground ${headerStyle} `}
      style={{ backgroundImage: `url(${image})` }}
    >
      <NavBar />
      <section className={titleStyle}>
        {title && <h1>{title}</h1>}
        {!!subtitle && <p>{subtitle}</p>}
      </section>
    </header>
  );
}

export default Header;
