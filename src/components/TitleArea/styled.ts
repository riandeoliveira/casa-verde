import styled from "styled-components";
import fonts from "../../themes/fonts";

export const TitleAreaBox = styled.div`
  display: flex;
  flex-direction: column-reverse;

  h1 {
    font-family: ${fonts.primary};
  }

  h2 {
    opacity: 0.5;
    font-size: 22px;
  }
`;
