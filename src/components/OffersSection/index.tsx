import type { Plant } from "@prisma/client";
import { PlantCard } from "components";
import styles from "./styles.module.scss";

interface OffersSectionProps {
  plantsData: Plant[];
}

const OffersSection = ({ plantsData }: OffersSectionProps): JSX.Element => {
  return (
    <section className={styles.section}>
      <div className={styles.section_container}>
        <div className={styles.title_container}>
          <h1 className={styles.title}>Conheça nossas</h1>
          <h2 className={styles.subtitle}>ofertas</h2>
        </div>
        <div className={styles.cards_container}>
          {plantsData.map((plant, i) => (
            <PlantCard
              name={plant.name}
              price={plant.price}
              image={plant.image_url}
              key={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
