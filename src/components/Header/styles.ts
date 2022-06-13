import styled from "styled-components";
import colors from "../../themes/colors";

export const Header = styled.header`
  max-width: 1200px;
  display: flex;
  margin: 10px auto auto;
  justify-content: space-between;
  align-items: end;
  height: 48px;

  nav {
    color: ${colors.primary};
    font-weight: bold;

    ul {
      gap: 15px;
      display: flex;
    }
  }
`;
