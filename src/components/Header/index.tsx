import * as S from "./styled";
import { logo } from "../../assets";

export const Header = (): JSX.Element => {
  return (
    <S.Header>
      <img src={logo} alt="Website logo" />
      <nav>
        <ul>
          <li>Como fazer</li>
          <li>/</li>
          <li>Ofertas</li>
          <li>/</li>
          <li>Depoimentos</li>
          <li>/</li>
          <li>Vídeos</li>
          <li>/</li>
          <li>Meu carrinho</li>
        </ul>
      </nav>
    </S.Header>
  );
};
