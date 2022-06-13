import styled from "styled-components";
import colors from "../../themes/colors";

export const Header = styled.header`
  align-items: end;
  display: flex;
  height: 48px;
  justify-content: space-between;
  margin: 10px auto auto;
  max-width: 1200px;

  nav {
    color: ${colors.primary};
    font-weight: bold;

    ul {
      display: flex;
      gap: 15px;
    }
  }
`;
