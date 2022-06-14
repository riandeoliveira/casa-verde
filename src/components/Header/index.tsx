import * as S from "./styles";
import { logo } from "../../assets";

export const Header = (): JSX.Element => (
  <S.Header>
    <div>
      <img src={logo} alt="Website logo" />
      <nav>
        <ul>
          <li>
            <a href="/">Como fazer</a>
          </li>
          <li>/</li>
          <li>
            <a href="/">Ofertas</a>
          </li>
          <li>/</li>
          <li>
            <a href="/">Depoimentos</a>
          </li>
          <li>/</li>
          <li>
            <a href="/">Vídeos</a>
          </li>
          <li>/</li>
          <li>
            <a href="/">Meu carrinho</a>
          </li>
        </ul>
      </nav>
    </div>
  </S.Header>
);
