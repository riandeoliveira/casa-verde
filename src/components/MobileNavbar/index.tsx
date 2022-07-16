import navLinks from "content/nav_links";
import { useToggle } from "hooks";
import Link from "next/link";
import { CgClose } from "react-icons/cg";
import { HiMenu } from "react-icons/hi";
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
          {navLinks.map((link) => (
            <li className={styles.item}>
              <Link href={link.path}>
                <a className={styles.link}>{link.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MobileNavbar;
