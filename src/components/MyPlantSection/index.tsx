import { my_plant } from "../../assets";
import * as S from "./styles";
import { ellipse } from "../../assets";

export const MyPlantSection = (): JSX.Element => (
  <S.Section>
    <div>
      <img src={my_plant} alt="Large card plant" />
      <div>
        <div>
          <h1>minha planta</h1>
          <h2>Como conseguir</h2>
        </div>
        <ul>
          <li>
            <img src={ellipse} alt="Yellow ellipse icon" />
            <span>Escolha suas plantas</span>
          </li>
          <li>
            <img src={ellipse} alt="Yellow ellipse icon" />
            <span>Faça seu pedido</span>
          </li>
          <li>
            <img src={ellipse} alt="Yellow ellipse icon" />
            <span>Aguarde na sua casa</span>
          </li>
        </ul>
      </div>
    </div>
  </S.Section>
);
