import { ellipse } from "../../assets";
import { TitleArea } from "../TitleArea";
import * as S from "./styled";
import { my_plant } from "../../assets";

export const MyPlantSection = (): JSX.Element => {
  return (
    <S.MyPlantSectionArea>
      <img src={my_plant} alt="Large card plant" />
      <div>
        <TitleArea title="minha planta" subtitle="Como conseguir" />
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
    </S.MyPlantSectionArea>
  );
};
