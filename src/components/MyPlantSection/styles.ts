import styled from "styled-components";
import colors from "../../themes/colors";
import fonts from "../../themes/fonts";

export const Section = styled.section`
  display: flex;
  gap: 32px;
  justify-content: center;
  min-height: 440px;

  & > div {
    background-color: ${colors.neutral_light};
    display: flex;
    width: 995px;

    & > img {
      width: 585px;
    }

    & > div {
      display: flex;
      flex-direction: column;
      gap: 32px;
      justify-content: center;
      padding-left: 32px;
      width: 100%;

      div {
        display: flex;
        flex-direction: column-reverse;
        gap: 12px;

        h1 {
          font-family: ${fonts.primary};
          font-size: 42px;
        }

        h2 {
          font-size: 22px;
          opacity: 0.5;
        }
      }

      ul {
        display: flex;
        flex-direction: column;
        gap: 32px;

        li {
          align-items: center;
          display: flex;
          font-size: 22px;
          gap: 16px;

          span {
            opacity: 0.5;
          }
        }
      }
    }
  }
`;
