import "./about.css";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">Greetings</h2>

      <div className="about__container container grid">
        <img
          src="https://res.cloudinary.com/dg1bjmdp8/image/upload/v1693478106/Portfolio/Public/about/about-main.jpg"
          alt="alan_about_img"
          className="about__img"
          loading="lazy"
        />

        <div className="about__data">
          <p className="about__description">
            The name's Alan, a former industrial designer, living in Japan and now turning my career into a full-stack web developer.
          </p>
          <p className="about__description">
            I decided to learn coding to complement my 5 years designing skills with a broad range of back and front end knowledge, allowing me to mix creativity with programming and take my expertise to the next step. Through my past experiences, I developed my ability to work as a team, take the initiative and communicate with those around me. Allowing me to work well no matter the environment and will proactively use my skills to reach my objectives.
          </p>
          <p>
            Outside of my constant skill development , I love to practice acroyoga, go for a hike to take pictures and learning new food recipes to try.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
