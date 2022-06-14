import styled from "styled-components";
import fonts from "../../themes/fonts";

export const Section = styled.section`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 1200px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

export const Title = styled.h1`
  font-family: ${fonts.primary};
  font-size: 82px;
  text-align: center;
`;

export const Subtitle = styled.h2`
  font-size: 22px;
  opacity: 0.5;
  text-align: center;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
`;
