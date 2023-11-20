import "./landingbanner.css";
import LandingInfo from './LandingInfo';

const LandingBanner = () => {
  return (
    <section className="landingB section" id="landingB">
      <div className="landingB__contaier container grid">
        <div className="landingB__content grid">

          <div className="landingB__img">
          <img
          src="https://res.cloudinary.com/dd05o0vvo/image/upload/v1700492992/Portfolio/home/Alan-light-logo_lhjxmf.svg"
          alt="alan_about_img"
          className="about__img"
          loading="lazy"
        />
          </div>

          <LandingInfo/>
        </div>
      </div>
    </section>
  )
}

export default LandingBanner;
