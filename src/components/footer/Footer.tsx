// import { NavLink } from "react-router-dom";
import "./footer.css";

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Find me here <span className="line__accent">/</span> </h1>
        <div className="footer__social">
          {/* <NavLink to="/contact" className="nav__contact-icon "></NavLink> */}
          {/* <a className="footer__social-link nav__contact-icon " rel="stylesheet" href="https://github.com/Alan-Tecua" target="blank_"/> */}
          <a className="footer__social-link icon__github " rel="stylesheet" href="https://github.com/Alan-Tecua" target="blank_"/>
          <a className="footer__social-link icon__linkedin " rel="stylesheet" href="https://www.linkedin.com/in/alan-tecuapetla/" target="blank_"/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
