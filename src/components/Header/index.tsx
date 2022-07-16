import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

const Header = (): JSX.Element => (
  <header className={styles.header}>
    <div className={styles.container}>
      <Image
        src="/assets/icons/logo.svg"
        alt="Ícone de uma folha de árvore do lado esquerdo do título 'Casa Verde'"
        width={180}
        height={45}
      />
      <nav>
        <ul className={styles.list}>
          <li>
            <Link href="/como-fazer">
              <a className={styles.link}>Como fazer</a>
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/ofertas">
              <a className={styles.link}>Ofertas</a>
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/depoimentos">
              <a className={styles.link}>Depoimentos</a>
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/videos">
              <a className={styles.link}>Vídeos</a>
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/meu-carrinho">
              <a className={styles.link}>Meu carrinho</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
