import { PlantCardProps } from "../../interfaces";
import * as S from "./styled";
import { arrow_right } from "../../assets";
import { plantImages } from "../../assets";

export const PlantCard = (props: PlantCardProps): JSX.Element => {
  const { image, name, price } = props;

  return (
    <S.PlantCardBox bgImage={image}>
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
    </S.PlantCardBox>
  );
};
