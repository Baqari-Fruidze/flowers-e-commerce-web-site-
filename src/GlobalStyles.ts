import { createGlobalStyle } from "styled-components";
export const Global = createGlobalStyle`

@import url('https://fonts.cdnfonts.com/css/gilroy-bold');

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
html{
    font-size: 62.5%;
}
body{

  
    background-color: #fff;

    font-family: "Gilroy", sans-serif;

    .slide-up-text {
  opacity: 0; /* Start with the text invisible */
  transform: translateY(20px); /* Start with the text positioned below */
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.slide-up-text.slide-up {
  opacity: 1; /* Make the text visible */
  transform: translateY(0); /* Move the text to its final position */
}

}
`;
