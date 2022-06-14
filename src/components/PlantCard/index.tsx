import * as S from "./styles";
import { arrow_right } from "../../assets";

interface PlantCardProps {
  image: string;
  key: number;
  name: string;
  price: number;
}

export const PlantCard = ({
  image,
  name,
  price,
}: PlantCardProps): JSX.Element => (
  <S.Card bgImage={image}>
    <div>
      <div>
        <h3>{name}</h3>
        <span>R$ {price.toFixed(2).replace(".", ",")}</span>
      </div>
      <button type="button">
        Comprar
        <img src={arrow_right} alt="Arrow right icon" />
      </button>
    </div>
  </S.Card>
);
