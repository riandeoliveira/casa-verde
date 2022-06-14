import * as S from "./styles";
import { mail } from "../../assets";

export const BestPlantsSection = (): JSX.Element => (
  <S.Section>
    <div>
      <div>
        <S.TitleContainer>
          <h1>melhores plantas</h1>
          <h2>Sua casa com as</h2>
        </S.TitleContainer>
        <p>
          Encontre aqui uma vasta seleção de plantas para decorar a sua casa e
          torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail
          e assine nossa newsletter para saber das novidades da marca.
        </p>
        <S.InputContainer>
          <img src={mail} alt="Email icon" />
          <input type="email" placeholder="Insira seu e-mail" />
          <button type="button">Assinar newsletter</button>
        </S.InputContainer>
      </div>
    </div>
  </S.Section>
);
