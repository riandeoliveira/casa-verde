import type { IListKey, INavLink } from "interfaces";
import Link from "next/link";
import styles from "./styles.module.scss";

interface NavLinkProps extends INavLink, IListKey {}

const NavLink = ({ id, path, title }: NavLinkProps): JSX.Element => {
  const isLastLink: boolean = id === 5;

  return (
    <li className={`${styles.item} ${!isLastLink && styles.separator}`}>
      <Link href={path}>
        <a className={styles.link}>{title}</a>
      </Link>
    </li>
  );
};

export default NavLink;
