import "./careerbg.css";
import { useState } from "react";
import { Exp, Edu } from "./Data";
import CareerItems  from "./CareerItems";
function CareerBg() {

  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index: number) => {
    setToggleState(index);
  };
  return (
    <section className="background bg__section" id="background">
      <div className="flex__text container">
        <h1 className="section__title">Career Background <span className="line__accent">/</span></h1>
        <p className="section__subtitle__nm">My Story</p>
      </div>

      <div data-aos="fade-down" className="background__container container">
        <div className="background__tabs">
          <div
            className={
              toggleState === 1
                ? "background__button background__active button--flex"
                : "background__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "background__button background__active button--flex"
                : "background__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            Experience
          </div>
        </div>
        <div className="background__sections">
          <div
            className={
              toggleState === 1
                ? "background__content background__content-active"
                : "background__content "
            }
          >
            {Edu.map((item) => {
              return <CareerItems key={item.id} item={item} />;
            })}
          </div>
          <div
            className={
              toggleState === 2
                ? "background__content background__content-active"
                : "background__content "
            }
          >
            {Exp.map((item) => {
              return <CareerItems key={item.id} item={item} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareerBg;
