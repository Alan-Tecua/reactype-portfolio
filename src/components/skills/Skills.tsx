import "./skills.css"
import { useState } from "react";

function Skills() {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index: number) => {
    setToggleState(index);
  }

  return (
    <section className="skill section" id="skills">
      <div className="flex__text container">
        <h1 className="section__title">Technical Skills <span className="line__accent">/</span></h1>
        <p className="section__subtitle__nm">My capabilities</p>
      </div>
      <div className="skill__container container grid">
        <div className="skill__content">
          <div>
            <img src="https://res.cloudinary.com/dd05o0vvo/image/upload/v1701243450/Portfolio/icons/DesignSkills-light-icon_qnbc9w.svg" alt="design" width={100} />
            <h3 className="skill__title">
              Design
            </h3>
          </div>

          <span className="skill__button" onClick={() => toggleTab(1)}>
            See more...
          </span>
        </div>

        <div
          className={
            toggleState === 1 ? "skill__modal active-modal" : "skill__modal"
          }
        >
          <div className="skill__modal-content">
            <span
              onClick={() => toggleTab(0)}
              className="skill__modal-close"
            >x</span>

            <h3 className="skill__modal-title">Design</h3>
            <p className="skill__modal-description">
              With more than 5 years of expereince, as designer im capable of conducting user research, creative thinking, and come up with ideas that follow the fundamentals of product design: "Create a solution to a users need"
            </p>

            <div className="skill__icons">
               <img src="https://res.cloudinary.com/dd05o0vvo/image/upload/v1700920677/Portfolio/icons/figma-logo_gr7pwi.svg" alt="Figma"/>
               <img src="https://res.cloudinary.com/dd05o0vvo/image/upload/v1701246924/Portfolio/icons/Illustrato-icon_ya45rw.svg" alt="Illustrator" />
               <img src="https://res.cloudinary.com/dd05o0vvo/image/upload/v1701246929/Portfolio/icons/Photoshop-icon_xfcnqd.svg" alt="Photoshop" />
               <img src="https://res.cloudinary.com/dd05o0vvo/image/upload/v1701246933/Portfolio/icons/Premiere-icon_yxsqzl.svg" alt="Premiere" />
             </div>
          </div>
        </div>

        <div className="skill__content">
          <div>
            <img src="https://res.cloudinary.com/dd05o0vvo/image/upload/v1701243444/Portfolio/icons/BESkills-light-icon_cdgnj7.svg" alt="Backend" width={100}/>
            <h3 className="skill__title">
              Backend Development
              {/* Backend <br /> Development */}
            </h3>
          </div>

          <span onClick={() => toggleTab(2)} className="skill__button">
            See more...
          </span>
        </div>

        <div
          className={
            toggleState === 2 ? "skill__modal active-modal" : "skill__modal"
          }
        >
          <div className="skill__modal-content">
            <i
              onClick={() => toggleTab(0)}
              className="uil uil-times skill__modal-close"
            ></i>

            <h3 className="skill__modal-title">Frontend Development</h3>
            <p className="skill__modal-description">
              Object-oriented programming and build MVC software from scratch.
              Relational databases and SQL.
            </p>

          </div>
        </div>

        <div className="skill__content">
          <div>
            <img src="https://res.cloudinary.com/dd05o0vvo/image/upload/v1701243440/Portfolio/icons/FESkills-light-icon_uo46il.svg" alt="Frontend" width={100} />
            <h3 className="skill__title">
              Frontend Development
            </h3>
          </div>

          <span onClick={() => toggleTab(3)} className="skill__button">
            See more...
            {/* <i className="uil uil-arrow-right skill__button-icon"></i> */}
          </span>
        </div>

        <div
          className={
            toggleState === 3 ? "skill__modal active-modal" : "skill__modal"
          }
        >
          <div className="skill__modal-content">
            <i
              onClick={() => toggleTab(0)}
              className="uil uil-times skill__modal-close"
            ></i>

            <h3 className="skill__modal-title">Backend Development</h3>
            <p className="skill__modal-description">
              textholder
            </p>

            <ul className="skill__modal-skill grid">
              <li className="skill__modal-skill">
                <i className="uil uil-check-circle skill__modal-icon"></i>
                <p className="skill__modal-info">Japanese (Native Speaker)</p>
              </li>

              <li className="skill__modal-skill">
                <i className="uil uil-check-circle skill__modal-icon"></i>
                <p className="skill__modal-info">English</p>
              </li>

              <li className="skill__modal-skill">
                <i className="uil uil-check-circle skill__modal-icon"></i>
                <p className="skill__modal-info">Spanish</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
