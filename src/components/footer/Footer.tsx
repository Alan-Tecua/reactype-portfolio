// import { NavLink } from "react-router-dom";
import "./footer.css";

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Find me here</h1>

        <div className="footer__social">
          {/* <NavLink to="/contact" className="nav__contact-icon nav__logo"></NavLink> */}
          <a className="nav__contact-icon nav__logo" rel="stylesheet" href="https://github.com/Alan-Tecua" target="blank_"/>
          <a className="icon__github nav__logo" rel="stylesheet" href="https://github.com/Alan-Tecua" target="blank_"/>
          <a className="icon__linkedin nav__logo" rel="stylesheet" href="https://www.linkedin.com/in/alan-tecuapetla/" target="blank_"/>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
