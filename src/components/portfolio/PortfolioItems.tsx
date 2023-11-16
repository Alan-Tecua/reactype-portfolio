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
    source: string;
    tags: string;
    url?: string;
  };
}

const cnm = new Cloudinary({
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
    </>
  )

}

export default PortfolioItems
