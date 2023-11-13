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
    <div>

    </div>
  )
}

export default Modal
