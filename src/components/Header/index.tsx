import DesktopNavbar from "components/DesktopNavbar";
import MobileNavbar from "components/MobileNavbar";
import Image from "next/image";
import styles from "./styles.module.scss";

const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Image
          src="/assets/icons/logo.svg"
          alt="Ícone de uma folha de árvore do lado esquerdo do título 'Casa Verde'"
          width={180}
          height={45}
        />
        <nav>
          <DesktopNavbar />
          <MobileNavbar />
        </nav>
      </div>
    </header>
  );
};

export default Header;
