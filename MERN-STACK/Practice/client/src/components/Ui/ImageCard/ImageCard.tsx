import styles from "./ImageCard.module.scss";
type ImageCardProps = {
  title?: string;
  img: string;
  description?: string;
  alt?: string;
};

const ImageCard = ({
  title = "dummy title",
  img,
  description = "dummy description",
  alt = "image",
}: ImageCardProps) => {
  return (
    <div className={styles.ImageCard}>
      <div className={styles.ImageContainer}>
        <img src={img} alt={alt} />
      </div>
      <div className={styles.Title}>{title}</div>
      <div className={styles.Description}>{description}</div>
    </div>
  );
};

export default ImageCard;
