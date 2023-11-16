import { CloudinaryImage } from "@cloudinary/url-gen"
import { AdvancedImage } from "@cloudinary/react";

interface ModalData {
  title: string;
  description: string;
  imageUrl: string;
  onClose: () => void;
  tags: string[];
  url?: string;
  source: string;
}

function Modal({title, description, imageUrl, onClose, tags, url, source}: ModalData) {
  return (
    <div className="work__modal-content">
      <i onClick={onClose} className="uil uil-timerwork__modal-close"></i>

    </div>
  )
}

export default Modal
