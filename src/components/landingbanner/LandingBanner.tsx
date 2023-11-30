import "./landingbanner.css";
import LandingInfo from './LandingInfo';

const LandingBanner = () => {
  return (
    <section className="landingB section" id="landingB">
      <div className="landingB__contaier container grid">
        <div className="landingB__content grid">

          <div className="landingB__img"></div>

          <LandingInfo/>
        </div>
      </div>
    </section>
  )
}

export default LandingBanner;
