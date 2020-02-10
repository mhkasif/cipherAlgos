import React from "react";
import "../../../styles/Nav.scss";
const Nav = ({ text }) => {
  return <div className="nav">{text?text:'Cryptonic'}</div>;
};

export default Nav;
