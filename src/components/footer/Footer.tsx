// import { NavLink } from "react-router-dom";
import "./footer.css";

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Find me here</h1>

        <div className="footer__social">
          {/* <a
            href="https://www.facebook.com//"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-facebook"></i>
          </a> */}

          <a
            href="https://github.com/Alan-Tecua"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/alan-tecuapetla/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
