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
      <div data-aos="fade-down"  className="skill__container container grid">
        <div className="skill__content">
          <div className="skill__title">
            <img src="https://res.cloudinary.com/dd05o0vvo/image/upload/v1701243450/Portfolio/icons/DesignSkills-light-icon_qnbc9w.svg" alt="design" width={100} />
            <h3 className="skill__title">Design</h3>
          </div>
          <ul>
            {/* <li><span className="line__accent"><i className="uil uil-arrow-right skill__button-icon"></i></span> 5 years of experience</li> */}
            <li><span className="line__accent">・</span> 5 years of experience</li>
            <li><span className="line__accent">・</span> Conducting user research</li>
            <li><span className="line__accent">・</span> Illustrator</li>
            <li><span className="line__accent">・</span> Photoshop</li>
            <li><span className="line__accent">・</span> Premiere</li>
            <li><span className="line__accent">・</span> Figma</li>
          </ul>
          {/* <span className="skill__button" onClick={() => toggleTab(1)}>
            See more
          </span> */}
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
            With more than 5 years of experience, as designer I’m capable of conducting user research,
            creative thinking and come up with ideas that follow the fundamentals of product design:
            "Create a solution to a users needs"
            </p>
            <ul className="portfolio__modal-skills">
              <li className="skill__modal-skill">
               <i className="devicon-figma-plain portfolio__modal-icon"></i>
              </li>
              <li className="skill__modal-skill">
               <span className="line__accent">・</span><i className={`devicon-illustrator-plain portfolio__modal-icon`}></i>
              </li>
              <li className="skill__modal-skill">
               <span className="line__accent">・</span><i className={`devicon-photoshop-plain portfolio__modal-icon`}></i>
              </li>
              <li className="skill__modal-skill">
                <span className="line__accent">・</span><i className={`devicon-premierepro-plain portfolio__modal-icon`}></i>
              </li>
            </ul>
          </div>
        </div>

        <div className="skill__content">
          <div className="skill__title">
            <img src="https://res.cloudinary.com/dd05o0vvo/image/upload/v1701243444/Portfolio/icons/BESkills-light-icon_cdgnj7.svg" alt="Backend" width={100}/>
            <h3 className="skill__title">
              Backend Development
              {/* Backend <br /> Development */}
            </h3>
          </div>

          {/* <span onClick={() => toggleTab(2)} className="skill__button">
            See more
          </span> */}
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

            <h3 className="skill__modal-title">Backend Development</h3>
            <p className="skill__modal-description">
             Specializing in Node.js, Ruby on Rails, and MySQL.
            Having  experience as well in handling data management and deploying scalable solutions using AWS (EC2, RDS).
            </p>
            <ul className="portfolio__modal-skills">
              <li className="skill__modal-skill">
                <i className="devicon-amazonwebservices-plain-wordmark portfolio__modal-icon"></i>
              </li>
              <li className="skill__modal-skill">
                <span className="line__accent">・</span><i className="devicon-mysql-plain-wordmark  portfolio__modal-icon"></i>
              </li>
              <li className="skill__modal-skill">
                <span className="line__accent">・</span><i className="devicon-postgresql-plain  portfolio__modal-icon"></i>
              </li>
              <li className="skill__modal-skill">
                <span className="line__accent">・</span><i className="devicon-npm-original-wordmark portfolio__modal-icon"></i>
              </li>
              <li className="skill__modal-skill">
                <span className="line__accent">・</span><i className="devicon-ruby-plain portfolio__modal-icon"></i>
              </li>
              <li className="skill__modal-skill">
                <span className="line__accent">・</span><i className="devicon-rails-plain portfolio__modal-icon"></i>
              </li>
            </ul>

          </div>
        </div>

        <div className="skill__content">
          <div className="skill__title">
            <img src="https://res.cloudinary.com/dd05o0vvo/image/upload/v1701243440/Portfolio/icons/FESkills-light-icon_uo46il.svg" alt="Frontend" width={100} />
            <h3 className="skill__title">
              Frontend Development
            </h3>
          </div>

          {/* <span onClick={() => toggleTab(3)} className="skill__button">
            See more
          </span> */}
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
            <h3 className="skill__modal-title">Frontend Development</h3>
            <p className="skill__modal-description">
              Experience in using frameworks such as React, Next.js, and Nuxt.js.
              Alongside JavaScript, TypeScript, HTML, and CSS/SCSS
              I'm able to build responsive and dynamic web pages, ensuring seamless user experiences.
            </p>
            <ul className="portfolio__modal-skills">
              <li className="skill__modal-skill">
                <i className="devicon-html5-plain portfolio__modal-icon"></i>
              </li>
              <li className="skill__modal-skill">
                <span className="line__accent">・</span><i className="devicon-css3-plain  portfolio__modal-icon"></i>
              </li>
              <li className="skill__modal-skill">
                <span className="line__accent">・</span><i className="devicon-typescript-plain portfolio__modal-icon"></i>
              </li>
              <li className="skill__modal-skill">
                <span className="line__accent">・</span><i className="devicon-nuxtjs-plain portfolio__modal-icon"></i>
              </li>
              <li className="skill__modal-skill">
                <span className="line__accent">・</span><i className="devicon-vuejs-plain portfolio__modal-icon"></i>
              </li>
              <li className="skill__modal-skill">
                <i className="devicon-nuxt-plain portfolio__modal-icon"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
