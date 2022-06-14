import { createGlobalStyle } from "styled-components";
import fonts from "./themes/fonts";
import colors from "./themes/colors";
import { bg_top } from "./assets";

export const GlobalStyle = createGlobalStyle`  
  * {
    border: 0;
    box-sizing: border-box;
    font-family: ${fonts.secondary}, ${fonts.default};
    list-style: none;
    margin: 0;
    outline: 0;
    padding: 0;
    text-decoration: none;
  }

  body {
    background-color: ${colors.neutral};
    background-image: url(${bg_top});
    background-position: top right;
    background-repeat: no-repeat;
  }
`;
