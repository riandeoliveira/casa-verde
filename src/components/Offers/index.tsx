import * as S from "./styles";
import plants from "../../content/plants.json";
import { PlantCard } from "../PlantCard";
import { plantImages } from "../../assets";

interface Plant {
  name: string;
  price: number;
}

export const Offers = (): JSX.Element => {
  return (
    <S.Section>
      <S.Container>
        <S.TitleContainer>
          <S.Title>ofertas</S.Title>
          <S.Subtitle>Conheça nossas</S.Subtitle>
        </S.TitleContainer>
        <S.CardContainer>
          {plants.map(
            (plant: Plant, i: number): JSX.Element => (
              <PlantCard
                name={plant.name}
                price={plant.price}
                image={plantImages[i]}
                key={i}
              />
            )
          )}
        </S.CardContainer>
      </S.Container>
    </S.Section>
  );
};
