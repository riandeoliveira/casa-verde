import styled from "styled-components";
import colors from "../../themes/colors";
import fonts from "../../themes/fonts";

export const PlantCard = styled.div`
  background-color: ${colors.neutral_light};
  width: 380px;
  height: 200px;
  display: flex;
  margin: 50px;

  & > img {
    width: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    padding: 24px 24px 24px 0;
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
  }
`;
