import "./portfolio.css";
import PortfolioProjects from "./PortfolioProjects";

function Portfolio() {
  return (
    <section data-aos="fade-up" className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">My work <span className="line__accent">/</span> </span>
      <PortfolioProjects/>
    </section>
  )

}

export default Portfolio;
