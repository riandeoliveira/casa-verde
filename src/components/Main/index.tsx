import styles from "./styles.module.scss";

interface MainProps {
  children: JSX.Element[];
}

const Main = ({ children }: MainProps): JSX.Element => {
  return <main className={styles.main}>{children}</main>;
};

export default Main;
