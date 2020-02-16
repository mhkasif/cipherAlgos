import React from "react";
import "../../../styles/Nav.scss";
const Nav = ({ text }) => {
  return <div className="nav">{text?text.toUpperCase():'Cryptonic'}</div>;
};

export default Nav;
