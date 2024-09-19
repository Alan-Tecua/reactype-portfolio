import { NavLink } from "react-router-dom";

const LandingInfo = () => {
  return (
    <div className="landing__data">
      <h1 className="landing__title">SANCHEZ TECUAPETLA</h1>
      <div className="flex__text">
        <h1 className="landing__title">ALAN <span className="line__accent">/</span></h1>
        <h3 className="landing__subtitle section__subtitle__nm">Fullstack Web Developer <span className="line__accent">+</span> Designer</h3>
      </div>

      {/* <NavLink to="/about" className="button button__flex">
        About me
      </NavLink> */}

    </div>

  );
};

export default LandingInfo;
