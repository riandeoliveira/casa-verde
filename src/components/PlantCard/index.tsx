import type { Plant } from "@prisma/client";
import type { IListKey } from "interfaces";
import Image from "next/image";
import styles from "./styles.module.scss";

interface PlantCardProps extends Omit<Plant, "id" | "image_url">, IListKey {
  image: Plant["image_url"];
}

const PlantCard = ({ price, image, name }: PlantCardProps): JSX.Element => {
  const formattedPrice = `R$ ${price.toFixed(2).replace(".", ",")}`;

  return (
    <div className={styles.card}>
      <Image src={image} alt="" width={190} height={200} objectFit="cover" />
      <div className={styles.container}>
        <div className={styles.title_container}>
          <h3 className={styles.title}>{name}</h3>
          <span className={styles.price}>{formattedPrice}</span>
        </div>
        <button type="button" className={styles.button}>
          Comprar
        </button>
      </div>
    </div>
  );
};

export default PlantCard;
