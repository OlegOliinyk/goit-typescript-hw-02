import React from "react";
import styles from "./ImageCard.module.css";

interface Image {
  urls: {
    small: string;
  };
  alt_description: string | null;
  width: number;
  height: number;
}

interface Props {
  image: Image;
  onClick: () => void;
}

const ImageCard: React.FC<Props> = ({ image, onClick }) => {
  return (
    <div className={styles.imageCardDiv} onClick={onClick}>
      <img
        src={image.urls.small}
        alt={image.alt_description || "Зображення"}
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
