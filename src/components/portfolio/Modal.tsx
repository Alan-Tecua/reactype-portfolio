import { CloudinaryImage } from "@cloudinary/url-gen"
import { AdvancedImage } from "@cloudinary/react";

interface ModalData {
  title: string;
  description: string;
  imageUrl: string;
  image: CloudinaryImage
  onClose: () => void;
  tags: string[];
  url?: string;
  source?: string;
}

function Modal({
  title,
  description,
  image,
  onClose,
  tags,
  url,
  source}: ModalData) {
  return (
    <div className="portfolio__modal-content">
      <i onClick={onClose} className="uil uil-times portfolio__modal-close"></i>
      <AdvancedImage
        cldImg={image}
        alt=""
        className="portfolio__modal-img"
        loading="lazy"
      />

      <h3 className="portfolio__modal-title">{title}</h3>
      <p className="portfolio__modal-description">{description}</p>

      <ul className="portfolio__modal-skills">
        {tags.map((tag, index) => {
          return (
            <li key={index} className="portfolio__modal-skill">
              <i className={`${tag} portfolio__modal-icon`}></i>
            </li>
          );
        })}
      </ul>
      <div className="portfolio__modal-buttons">
        {url && (
          <a href={url} target="_blank">
            <button className="portfolio__modal-button">
              <i className="bx bx-link"></i>
            </button>
          </a>
        )}
        <a href={source} target="_blank">
          <button className="portfolio__modal-button">
            <i className="bx bxl-github"></i>
          </button>
        </a>
      </div>
    </div>
  );
}

export default Modal
