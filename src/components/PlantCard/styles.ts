import styled from "styled-components";
import colors from "../../themes/colors";
import fonts from "../../themes/fonts";

interface CardProps {
  bgImage: string;
}

export const Card = styled.div<CardProps>`
  align-items: end;
  background-color: ${colors.neutral_light};
  background-image: url(${({ bgImage }) => bgImage});
  background-position: -15% 30%;
  background-repeat: no-repeat;
  background-size: 67%;
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 380px;
`;

export const NamePriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: inherit;
  justify-content: space-between;
  margin: 24px 24px 24px 0;
  width: 160px;
`;

export const Name = styled.h3`
  font-family: ${fonts.primary};
  font-size: 32px;
`;

export const Price = styled.span`
  font-weight: 600;
  opacity: 0.5;
`;

export const Button = styled.button`
  align-items: center;
  background-color: transparent;
  color: ${colors.secondary};
  cursor: pointer;
  display: flex;
  font-size: 16px;
  font-weight: bold;
  gap: 30px;
`;
