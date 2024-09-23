import { useEffect, useState } from "react";

import { projectsData, projectsNav } from "./Data";
import PortfolioItems from "./PortfolioItems";

interface Project {
  id: number;
  title: string;
  image: {
    main: string;
    sub: string;
  };
  category: string;
  description: string;
  tags: string[];
  secondTags: string[];
  url?: string;
  source?: string;
}

function PortfolioProjects() {
  const [item, setItem] = useState({name: "all"});
  const [projects, setProjects] = useState<Project[]>([]);
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData)
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLocaleLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    index: number
  ) => {
    const targetText = (e.target as HTMLSpanElement).textContent;
    if (targetText) {
      setItem({ name: targetText.toLowerCase()})
    }
    setActive(index)
  };

  return (
    <div>
      <div className="portfolio__filters">
        {projectsNav.map((item, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              className={`${active === index ? "active-portfolio" : ""} portfolio__item`}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>

      <div className="portfolio__container container grid">
        {projects.map((item) => {
          return <PortfolioItems item={item} key={item.id} />;
        })}
      </div>
    </div>

  );

}

export default PortfolioProjects
