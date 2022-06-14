import styled from "styled-components";
import colors from "../../themes/colors";
import fonts from "../../themes/fonts";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 44px;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 1200px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 12px;

  h1 {
    font-family: ${fonts.primary};
    color: ${colors.primary};
    font-size: 82px;
    text-align: center;
  }

  h2 {
    font-size: 22px;
    opacity: 0.5;
    text-align: center;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
`;
