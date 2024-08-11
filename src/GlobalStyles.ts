import { createGlobalStyle } from "styled-components";
export const Global = createGlobalStyle`

@import url('https://fonts.cdnfonts.com/css/gilroy-bold');

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Gilroy, sans-serif;
}
html{
    font-size: 62.5%;
}
body{
 background-color: #fff;

    font-family: "Gilroy", sans-serif;
  }

    .slide-up-text {
  opacity: 0; 
  transform: translateY(20px); 
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.slide-up-text.slide-up {
  opacity: 1; 
  transform: translateY(0); 
}
`;
