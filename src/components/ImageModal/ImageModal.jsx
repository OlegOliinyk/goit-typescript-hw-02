import Modal from "react-modal";
import styles from "./ImageModal.module.css";
import { FaCamera, FaHeart } from "react-icons/fa";
import { MdDescription } from "react-icons/md";

const ImageModal = ({ isOpen, onClose, image }) => {
  if (!image) return null;
  console.log(image);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className={styles.imageModal}
      ariaHideApp={false}>
      <div className={styles.imageModalDivImg}>
        <img
          src={image.urls.regular}
          alt={image.alt_description}
          className={
            image.width < image.height
              ? styles.imageModalImgWidth
              : styles.imageModalImgHeight
          }
        />
      </div>
      <div className={styles.imageModalDiv}>
        <ol className={styles.imageModalOl}>
          <li className="">
            <FaCamera />: {image.user.name}
          </li>
          <li className="">
            <MdDescription />: {image.alt_description}
          </li>
          <li className="">
            <FaHeart />: {image.likes}
          </li>
        </ol>
        <button onClick={onClose} className={styles.imageModalButton}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default ImageModal;
