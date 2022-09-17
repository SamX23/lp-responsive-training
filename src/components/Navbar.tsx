import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdFingerprint } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import Button from "./Button";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const handleCloseNavMenu = () => setClick(false);

  const showButton = () => {
    window.innerWidth <= 960 ? setButton(false) : setButton(true);
  };

  useEffect(() => showButton(), []);

  window.addEventListener("resize", showButton);

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo" onClick={handleCloseNavMenu}>
            <MdFingerprint className="navbar-icon" />
            LOGO
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-links">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-links">
                Products
              </Link>
            </li>
            <li className="nav-btn">
              <Link to="/register" className="btn-link">
                {button ? (
                  <Button type="button" buttonStyle="btn--outline">
                    Sign Up
                  </Button>
                ) : (
                  <Button
                    type="button"
                    buttonStyle="btn--outline"
                    buttonSize="btn--mobile"
                  >
                    Sign Up
                  </Button>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Navbar;
