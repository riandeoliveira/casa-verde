import styles from "./styles.module.scss";

interface TitleBoxProps {
  title: string;
  subtitle: string;
}

const TitleBox = ({ title, subtitle }: TitleBoxProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.subtitle}>{subtitle}</h2>
    </div>
  );
};

export default TitleBox;
