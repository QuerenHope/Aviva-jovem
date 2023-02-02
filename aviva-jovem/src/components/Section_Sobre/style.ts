import styled from 'styled-components'

export const TagSection = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Bitter', serif;
    color: var(--color-white);
    background-color: var(--color-roxo);
    padding-bottom: 5rem;
    

    .container{
        background: linear-gradient(0deg,rgba(89,62,103,1) 0%,rgba(132,73,95,1) 30%,rgba(184,91,86,1) 50%,rgba(222,116,28,1) 100%);
        padding-top: 6rem;
        display: flex;
        flex-direction: column;
        padding: 9rem 0;
        gap: 20px;
        
    }

    h2{
        display: flex;
        align-items: center;
        flex-direction: column;
        font-size: 4vw;
        margin-bottom: 3rem;
        font-weight: 500;
        div{
            color: var(--color-amarelo);
        }
    }

    .info{
        display: flex;
        flex-direction: column;

        margin-top: 10%;
        height: 20rem;
        padding: 0 10%;
        gap: 2rem;
    }
    
    .localizaçao{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 2rem;
        
        svg{
            position: absolute;
            z-index: 0;
            left: -100px;
            width: 70%;
            height: 60%;
        }

        p{
            margin-top:0.5rem;

        }
        h3{
            display: flex;
            align-items: center;
            flex-direction: column;
            font-size: 4vw;
            margin-bottom: 2rem;
            font-weight: 500;
            z-index: 1;
            div{
                color: var(--color-amarelo);
        }
    }
}
@media (max-width: 700px) {
    .container {
        padding-top:5rem;
    }
    h2{
        font-size: 8vw;
        text-align:center;
    }
    .react-3d-carousel{
        width: 90vw;
    }
    .localizaçao{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
        margin-top:0.5rem;

    }
    h3{
        display: flex;
        align-items: center;
        flex-direction: column;
        font-size: 6vw;
        margin-bottom: 2rem;
        font-weight: 500;
    div{
        color: var(--color-amarelo);
    }
    }
}
}
    
`