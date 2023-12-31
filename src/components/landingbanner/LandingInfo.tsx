import { NavLink } from "react-router-dom";

const LandingInfo = () => {
  return (
    <div className="landingB__data">
      <h1 className="landingB__title">SANCHEZ TECUAPETLA</h1>
      <h1 className="landingB__title">ALAN</h1>
      <h3>Fullstack Web Developer + Product Designer</h3>

      <NavLink to="/about" className="button button--flex">
        About me
      </NavLink>

    </div>

  );
};

export default LandingInfo;
