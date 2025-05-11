import styles from "./Profilecard.module.scss";
type ProfileCardProps = {
  title: string;
  img: string;
  description: string;
};

const Profilecard = ({ title, img, description }: ProfileCardProps) => {
  return (
    <div className={styles.ProfileCard}>
      <div className={styles.ImageContainer}>
        <img src={img} alt="image" />
      </div>
      <div className={styles.Title}>{title}</div>
      <div className={styles.Description}>{description}</div>
    </div>
  );
};

export default Profilecard;
