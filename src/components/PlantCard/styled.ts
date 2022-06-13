import styled from "styled-components";
import { PlantCardBoxProps } from "../../interfaces";
import colors from "../../themes/colors";
import fonts from "../../themes/fonts";

export const PlantCardBox = styled.div<PlantCardBoxProps>`
  background-color: ${colors.neutral_light};
  background-image: url(${(props) => props.bgImage});
  background-repeat: no-repeat;
  width: 380px;
  height: 200px;
  display: flex;
  margin: 50px;
  flex-direction: column;
  align-items: end;
  background-position-x: -15%;

  & > div {
    width: 160px;
    height: inherit;
    margin: 24px 24px 24px 0;
    justify-content: space-between;
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }

  h3 {
    font-family: ${fonts.primary};
    font-size: 32px;
  }

  span {
    opacity: 0.5;
    font-weight: 600;
  }

  button {
    display: flex;
    align-items: center;
    color: ${colors.secondary};
    gap: 30px;
    background-color: transparent;
    font-weight: bold;
  }
`;
