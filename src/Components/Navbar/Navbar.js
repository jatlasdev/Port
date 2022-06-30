import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("n-list");
  const [toggleIcon, setToggleIcon] = useState("n-toggler ");
  const navToggler = () => {
    active === "n-list" ? setActive("n-list n-active") : setActive("n-list");
    toggleIcon === "n-toggler "
      ? setToggleIcon("n-toggler toggle")
      : setToggleIcon("n-toggler ");
  };

  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="name">Jeremy</div>
      </div>
      <div className="n-right">
        <ul className={active} style={{ listStyleType: "none" }}>
          <li>
            <a href="#" className="list-item">
              About
            </a>
          </li>
          <li>
            <a href="#" className="list-item">
              Experience
            </a>
          </li>
          <li>
            <a href="#" className="list-item">
              Projects
            </a>
          </li>
          <button className="n-button">Contact</button>
        </ul>
        <div className={toggleIcon} onClick={navToggler}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
