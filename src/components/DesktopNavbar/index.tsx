import { navLinks } from "content";
import Link from "next/link";
import styles from "./styles.module.scss";

const DesktopNavbar = (): JSX.Element => {
  return (
    <ul className={styles.list}>
      {navLinks.map((link, i) => (
        <>
          <li>
            <Link href={link.path}>
              <a className={styles.link}>{link.title}</a>
            </Link>
          </li>
          {navLinks.length - 1 !== i && <li>/</li>}
        </>
      ))}
    </ul>
  );
};

export default DesktopNavbar;
