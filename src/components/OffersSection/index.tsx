import { PlantCard } from "../PlantCard";
import { TitleArea } from "../TitleArea";
import * as S from "./styled";
import plants from "../../content/plants.json";
import { plantImages } from "../../assets";

export const OffersSection = (): JSX.Element => {
  return (
    <S.OffersSectionArea>
      <TitleArea title="ofertas" subtitle="Conheça nossas" />
      <S.PlantCardsBox>
        {plants.map((plant, i) => (
          <PlantCard
            name={plant.name}
            price={plant.price}
            image={plantImages[i]}
            key={i}
          />
        ))}
      </S.PlantCardsBox>
    </S.OffersSectionArea>
  );
};
