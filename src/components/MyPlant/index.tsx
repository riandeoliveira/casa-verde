import { my_plant } from "../../assets";
import * as S from "./styles";
import { ellipse } from "../../assets";

export const MyPlant = (): JSX.Element => {
  return (
    <S.Section as="div">
      <S.Container>
        <S.Plant src={my_plant} alt="Large card plant" />
        <S.Content>
          <S.TitleContainer>
            <S.Title>minha planta</S.Title>
            <S.Subtitle>Como conseguir</S.Subtitle>
          </S.TitleContainer>
          <S.List>
            <S.Item>
              <img src={ellipse} alt="Yellow ellipse icon" />
              <S.Text>Escolha suas plantas</S.Text>
            </S.Item>
            <S.Item>
              <img src={ellipse} alt="Yellow ellipse icon" />
              <S.Text>Faça seu pedido</S.Text>
            </S.Item>
            <S.Item>
              <img src={ellipse} alt="Yellow ellipse icon" />
              <S.Text>Aguarde na sua casa</S.Text>
            </S.Item>
          </S.List>
        </S.Content>
      </S.Container>
    </S.Section>
  );
};
