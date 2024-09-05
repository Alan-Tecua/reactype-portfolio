import "./landingbanner.css";
import LandingInfo from './LandingInfo';

const LandingBanner = () => {
  return (
    <section className="landing section" id="landing">
      <div className="landing__container container grid">
        <div className="landing__content grid">
          <div className="landing__img">
            <div className="landing__img--blur"></div>
          </div>
          <LandingInfo/>
        </div>
      </div>
    </section>
  )
}

export default LandingBanner;
