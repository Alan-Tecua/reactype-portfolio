import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  useEffect(() => {
    const navbar = document.querySelector(".navbar");

    const isScreenWidthAboveThreshold = window.innerWidth > 768;

    if (navbar && isScreenWidthAboveThreshold) {
      const handleScroll = () => {
        if (window.scrollY >= 80) {
          navbar.classList.add("scroll-navbar");
        } else {
          navbar.classList.remove("scroll-navbar");
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <header className="navbar">
      <nav className="nav container">
      {/* <NavLink to="/" className="nav__logo"></NavLink> */}
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-estate nav__icon"></i>
                 PORTFOLIO
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-user nav__icon"></i> ABOUT
              </NavLink>
            </li>

            {/* <li className="nav__item">
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  isActive ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-scenery nav__icon"></i> PORTFOLIO
              </NavLink>
            </li> */}
          </ul>
        </div>
        <div className="nav icons">
          {/* <NavLink to="/contact" className="nav__contact-icon nav__logo"></NavLink> */}
          <a className="icon__github nav__logo" rel="stylesheet" href="https://github.com/Alan-Tecua" target="blank_"/>
          <a className="icon__linkedin nav__logo" rel="stylesheet" href="https://www.linkedin.com/in/alan-tecuapetla/" target="blank_"/>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
