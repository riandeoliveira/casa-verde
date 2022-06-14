import styled from "styled-components";
import fonts from "../../themes/fonts";
import colors from "../../themes/colors";
import { best_plant } from "../../assets";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  height: 900px;

  & > div {
    width: 1200px;
    display: flex;
    align-items: center;
    background-image: url(${best_plant});
    background-repeat: no-repeat;
    background-position: right;
    background-size: 75%;

    & > div {
      gap: 32px;
      max-width: 585px;
      display: flex;
      flex-direction: column;

      p {
        margin-right: 72px;
        line-height: 26px;
        opacity: 0.5;
      }
    }
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column-reverse;

  h1 {
    font-family: ${fonts.primary};
    color: ${colors.primary};
    font-size: 82px;
  }

  h2 {
    font-size: 22px;
    opacity: 0.5;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  background-color: ${colors.neutral_light};

  img {
    padding: 16px;
  }

  input {
    padding: 30px 30px 30px 0;
    width: 100%;
    flex: 1.6;
    font-size: 16px;
    opacity: 0.5;
  }

  button {
    flex: 1;
    background-color: ${colors.secondary};
    color: ${colors.neutral_light};
    cursor: pointer;
    font-size: 16px;
  }
`;
