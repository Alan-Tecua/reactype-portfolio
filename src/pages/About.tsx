import "./about.css";
import LandingBanner from "../components/landingbanner/LandingBanner";
import Skills from "../components/skills/Skills";
import CareerBg from "../components/careerbg/CareerBg";


const About = () => {
  // return (
  //   <section className="about section" id="about">
  //     <div id="about__me">
  //       <div className="about__container">
  //         <div className="about__description">
  //           <div data-aos="fade-up" className="about__alignment">
  //             <img
  //               src="https://res.cloudinary.com/dd05o0vvo/image/upload/v1725345121/Portfolio/AST-magenta-shade_rcbq1x.png"
  //               alt="Oscar Alan Sanchez Tecuapetla"
  //               className="profile__image"
  //             />
  //           </div>
  //           <div className="about__text">
  //             <h1 className="about__title">
  //               Greetings <span className="line__accent">/</span>
  //             </h1>
  //             <div>
  //               <p>
  //                 The name's Alan, a former industrial designer, living in Japan
  //                 and now turning my career into a full-stack web developer.
  //               </p>
  //               <br/>
  //               <p>
                  // I decided to learn coding to complement my 5 years designing
                  // skills with a broad range of back and front end knowledge,
                  // allowing me to mix creativity with programming and take my
                  // expertise to the next step. Through my past experiences, I
                  // developed my ability to work as a team, take the initiative,
                  // and communicate with those around me, allowing me to work
                  // well no matter the environment and proactively use my skills
                  // to reach my objectives.
  //               </p>
  //               <br/>
  //               <p>
  //                 Outside of my constant skill development, I love to practice
  //                 acroyoga, do standing up paddling (SUP), and try making new food
  //                 recipes.
  //               </p>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );

  return (

    <>
    <LandingBanner />
      <section className="about section" id="about">
        <h2 className="section__title">Greetings <span className="line__accent">/</span></h2>
        <span className="section__subtitle">About me</span>

        <div className="about__container container grid">
          <img
            src="https://res.cloudinary.com/dd05o0vvo/image/upload/v1726547523/about_me_igwbin.png"
            alt=""
            className="about__img"
            loading="lazy"
          />

          <div className="about__data">
            <p className="about__description">
            The name's Alan, a former industrial designer, living in Japan and now turning my career into a full-stack web developer.
            </p>
            <p className="about__description">
            I decided to learn coding to complement my 5 years designing
            skills with a broad range of back and front end knowledge,
            allowing me to mix creativity with programming and take my
            expertise to the next step.
            </p>
            <p className="about__description">
            Through my past experiences, I
            developed my ability to work as a team, take the initiative,
            and communicate with those around me, allowing me to work
            well no matter the environment and proactively use my skills
            to reach my objectives.
            </p>
          </div>
        </div>
      </section>

        <Skills />
        <CareerBg />
       </>

  );
};

export default About;
