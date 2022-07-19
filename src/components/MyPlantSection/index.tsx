import Image from "next/image";
import styles from "./styles.module.scss";

const MyPlantSection = (): JSX.Element => (
  <section className={styles.section}>
    <div className={styles.section_container}>
      <Image
        src="/assets/images/my_plant.png"
        alt="Cartão grande de planta"
        width={585}
        height={440}
      />
      <div className={styles.container}>
        <div className={styles.title_container}>
          <h1 className={styles.title}>Como conseguir</h1>
          <h2 className={styles.subtitle}>minha planta</h2>
        </div>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Image
              src="/assets/icons/ellipse.svg"
              alt="Ícone amarelo de uma elipse"
              width={52}
              height={52}
            />
            <span>Escolha suas plantas</span>
          </li>
          <li className={styles.item}>
            <Image
              src="/assets/icons/ellipse.svg"
              alt="Ícone amarelo de uma elipse"
              width={52}
              height={52}
            />
            <span>Faça seu pedido</span>
          </li>
          <li className={styles.item}>
            <Image
              src="/assets/icons/ellipse.svg"
              alt="Ícone amarelo de uma elipse"
              width={52}
              height={52}
            />
            <span>Aguarde na sua casa</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default MyPlantSection;
