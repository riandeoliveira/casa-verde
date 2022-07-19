import { NavLink } from "components";
import navLinks from "content/nav_links";
import { useToggle } from "hooks";
import { CgClose, HiMenu } from "libs/react-icons";
import styles from "./styles.module.scss";

const MobileNavbar = (): JSX.Element => {
  const [menuIsOpen, toggleMenuShow] = useToggle(false);

  return (
    <>
      <button type="button" className={styles.menu_icon}>
        {menuIsOpen ? (
          <CgClose size={42} onClick={toggleMenuShow} />
        ) : (
          <HiMenu size={42} onClick={toggleMenuShow} />
        )}
      </button>
      {menuIsOpen && (
        <ul className={styles.list}>
          {navLinks.map(({ id, title, path }) => (
            <NavLink id={id} title={title} path={path} key={id} />
          ))}
        </ul>
      )}
    </>
  );
};

export default MobileNavbar;
