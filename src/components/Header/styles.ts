import styled from "styled-components";
import colors from "../../themes/colors";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  height: 48px;
  justify-content: space-between;
  width: 1200px;
`;

export const List = styled.ul`
  display: flex;
  font-weight: bold;
  gap: 15px;
`;

export const Link = styled.a`
  color: ${colors.primary};
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.5;
  }
`;
