import { TitleAreaProps } from "../../interfaces";
import * as S from "./styled";

export const TitleArea = (props: TitleAreaProps): JSX.Element => {
  const { title, subtitle } = props;

  return (
    <S.TitleAreaBox>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </S.TitleAreaBox>
  );
};
