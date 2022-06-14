import styled from "styled-components";
import colors from "../../themes/colors";
import fonts from "../../themes/fonts";

export const Section = styled.section`
  display: flex;
  gap: 32px;
  justify-content: center;
  min-height: 440px;
`;

export const Container = styled.div`
  background-color: ${colors.neutral_light};
  display: flex;
  width: 995px;
`;

export const Plant = styled.img`
  width: 585px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  gap: 32px;
  margin-left: 32px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 12px;
`;

export const Title = styled.h1`
  font-family: ${fonts.primary};
  font-size: 42px;
`;

export const Subtitle = styled.h2`
  font-size: 22px;
  opacity: 0.5;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 22px;
`;

export const Text = styled.span`
  opacity: 0.5;
`;
