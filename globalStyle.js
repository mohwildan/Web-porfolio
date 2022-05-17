import { createGlobalStyle } from "styled-components";
import "@fontsource/roboto-mono";

const GlobalStyle = createGlobalStyle`

body{
    background: ${({ theme }) => theme.body};
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

h1,h2,h3,h4,h5,h6,a{
    font-family: "Roboto Mono", monospace;
}


.toggle{
    :nth-child(1){
        transform: translateY(11px) rotate(45deg);
    }
     :nth-child(2){
        opacity: 0;
    }
     :nth-child(3){
        transform: translateY(-11px) rotate(-45deg);
    }
}

`;

export default GlobalStyle;
