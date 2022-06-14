import * as S from "./styles";
import plants from "../../content/plants.json";
import { PlantCard } from "../PlantCard";
import { plantImages } from "../../assets";

interface Plant {
  name: string;
  price: number;
}

export const PlantCardsArea = (): JSX.Element => (
  <S.Container>
    {plants.map(
      ({ name, price }: Plant, i: number): JSX.Element => (
        <PlantCard name={name} price={price} image={plantImages[i]} key={i} />
      )
    )}
  </S.Container>
);
