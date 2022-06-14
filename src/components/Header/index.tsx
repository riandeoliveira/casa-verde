import * as S from "./styles";
import { logo } from "../../assets";

export const Header = (): JSX.Element => {
  return (
    <S.Header>
      <S.Container>
        <img src={logo} alt="Website logo" />
        <nav>
          <S.List>
            <li>
              <S.Link href="/">Como fazer</S.Link>
            </li>
            <li>/</li>
            <li>
              <S.Link href="/">Ofertas</S.Link>
            </li>
            <li>/</li>
            <li>
              <S.Link href="/">Depoimentos</S.Link>
            </li>
            <li>/</li>
            <li>
              <S.Link href="/">Vídeos</S.Link>
            </li>
            <li>/</li>
            <li>
              <S.Link href="/">Meu carrinho</S.Link>
            </li>
          </S.List>
        </nav>
      </S.Container>
    </S.Header>
  );
};
