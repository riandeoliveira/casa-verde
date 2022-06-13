import styled from "styled-components";
import colors from "../../themes/colors";

export const MyPlantSectionArea = styled.section`
  max-width: 995px;
  display: flex;
  min-height: 440px;
  background-repeat: no-repeat;
  background-color: ${colors.neutral_light};
  gap: 32px;

  & > div {
    display: flex;
    justify-content: center;
    gap: 32px;
    flex-direction: column;
  }

  h1 {
    font-size: 42px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 32px;

    li {
      display: flex;
      align-items: center;
      gap: 16px;

      span {
        font-size: 22px;
        opacity: 0.5;
      }
    }
  }
`;
