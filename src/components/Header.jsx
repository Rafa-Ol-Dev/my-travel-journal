import React from "react";
import Earth from "../images/earth.png"

function Header() {
  return (
    <div className="header">
      <img src={Earth} className="earth-logo" />
      <p className="header--text">my travel journal</p>
    </div>
  )
}

export default Header