import styles from "./ImageCard.module.css";

const ImageCard = ({ image, onClick }) => {
  return (
    <div className={styles.imageCardDiv} onClick={onClick}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={
          image.width < image.height
            ? styles.imageCardImgWidth
            : styles.imageCardImgHeight
        }
      />
    </div>
  );
};

export default ImageCard;
