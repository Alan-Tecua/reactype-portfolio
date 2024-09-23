import { useState } from "react";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

import  Modal from "./Modal";

interface PortfolioItem {
  item: {
    id: number;
    title: string;
    image: {
      main: string;
      sub: string;
    };
    category: string;
    description: string;
    source?: string;
    tags: string[];
    url?: string;
  };
}

const cloudinary = new Cloudinary({
  cloud: {
    cloudName: "dd05o0vvo"
  }
});

function PortfolioItems({item}: PortfolioItem) {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (id: number) => {
    setToggleState(id);
  };

  return (
    <>
    <div data-aos="fade-up"  className="portfolio__card-wrapper" key={item.id}>
      <div className="portfolio__card">
        <AdvancedImage
          cldImg={cloudinary.image(item.image.main)}
          alt="project image"
          className="portfolio__img"
          loading="lazy"
        />
        <div className="portfolio__card--hover">
          <h3 className="portfolio__title">{item.title}</h3>
          <span className="portfolio__button" onClick={() => toggleTab(item.id)}>
            See more{" "}
          </span>
        </div>
      </div>

        <div className="portfolio__tags-section">
          <p className="portfolio__secondary-tags">{item.title}</p>
        </div>
      </div>


      <div
        className={
          toggleState === item.id ? "portfolio__modal active-modal" : "portfolio__modal"
        }
      >
        <Modal
          title={item.title}
          description={item.description}
          imageUrl={item.image.sub}
          image={cloudinary.image(item.image.sub)}
          onClose={() => toggleTab(0)}
          tags={item.tags}
          url={item.url}
          source={item.source}
          />
      </div>
    </>
  )

}

export default PortfolioItems
