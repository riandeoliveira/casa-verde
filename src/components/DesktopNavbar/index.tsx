import { NavLink } from "components";
import { navLinks } from "content";
import styles from "./styles.module.scss";

const DesktopNavbar = (): JSX.Element => {
  return (
    <ul className={styles.list}>
      {navLinks.map(({ id, title, path }) => (
        <NavLink id={id} title={title} path={path} key={id} />
      ))}
    </ul>
  );
};

export default DesktopNavbar;
