import * as S from "./styles";
import { arrow_right } from "../../assets";

interface PlantCardProps {
  image: string;
  key: number;
  name: string;
  price: number;
}

export const PlantCard = (props: PlantCardProps): JSX.Element => {
  const { image, name, price } = props;

  return (
    <S.Card bgImage={image}>
      <S.Container>
        <S.NamePriceContainer>
          <S.Name>{name}</S.Name>
          <S.Price>R$ {price.toFixed(2).replace(".", ",")}</S.Price>
        </S.NamePriceContainer>
        <S.Button type="button">
          Comprar
          <img src={arrow_right} alt="Arrow right icon" />
        </S.Button>
      </S.Container>
    </S.Card>
  );
};
