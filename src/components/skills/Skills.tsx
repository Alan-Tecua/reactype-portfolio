import "./skills.css"
import { useState } from "react";

function Skills() {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index: number) => {
    setToggleState(index);
  }

  return (
    <section className="skill section" id="skill">
      <h1>Technical Skills <span>/</span></h1>

      <div className="skill__container container grid">
        <div className="skill__data">
          <div>
            <h3 className="skill__category">
              Design
            </h3>
            <div>
              <span className="skill__detail" onClick={() => toggleTab(1)}>Details</span>
            </div>

            <div className={
              toggleState === 1 ? "skill__modal active-modal" : "skill__modal"
            }>
              <div className="skill__modal-details">
                <i onClick={() => toggleTab(0)} className="uil uil-times skill__modal-close"></i>

                <h3 className="skill__modal-title">Design</h3>
                <p className="skill__modal-text">
                  Lorem Ipsum my ave tonitruum
                </p>
                <div className="skill__icons">
                  <img src="https://res.cloudinary.com/dd05o0vvo/image/upload/v1700920677/Portfolio/icons/figma-logo_gr7pwi.svg" alt="Figma"/>
                  <img src="https://res.cloudinary.com/dd05o0vvo/image/upload/v1701246924/Portfolio/icons/Illustrato-icon_ya45rw.svg" alt="Illustrator" />
                  <img src="https://res.cloudinary.com/dd05o0vvo/image/upload/v1701246929/Portfolio/icons/Photoshop-icon_xfcnqd.svg" alt="Photoshop" />
                  <img src="https://res.cloudinary.com/dd05o0vvo/image/upload/v1701246933/Portfolio/icons/Premiere-icon_yxsqzl.svg" alt="Premiere" />
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;
