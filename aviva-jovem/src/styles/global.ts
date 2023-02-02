import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    button{
        cursor: pointer;
        border: none;
        background: transparent;
    }
    ul, ol, li{
        list-style: none;
    }
    img{
        max-width: 100%;
    }
    input, select{
        background: transparent;
        border: none;
    } 
    :root{
        --color-amarelo: #FEA837;
        --color-amareloligth:rgba(254, 168, 55, 0.24);
        --color-amareloqueimado: #DE741C;
        --color-roxoclaro: #B85B56;
        --color-lilas: #84495F;
        --color-roxo: #593E67;
        --color-white: #ffff

    }
    body{
        background: var(--color-white);
    }
    h1, h2, h3, h4, h5, h6, p, span, li, a{
    font-family: 'Bitter', serif;
    color: var(--color-white);
    text-decoration: none;

    .whats{
        bottom: 78px;
    }
}
`;