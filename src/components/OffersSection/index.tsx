import * as S from "./styles";
import { PlantCardsArea } from "../PlantCardsArea";

export const OffersSection = (): JSX.Element => (
  <S.Section>
    <div>
      <S.TitleContainer>
        <h1>ofertas</h1>
        <h2>Conheça nossas</h2>
      </S.TitleContainer>
      <PlantCardsArea />
    </div>
  </S.Section>
);
