import styled from 'styled-components'

export const TagSection = styled.div`

    position: relative;
    width: 100%;
    /* height: 50vmax; */
    .impequena {
        
        display:none;
        
    }
    .imgrande{
        width:100%;
        height: 100%
    }
    .banner{
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        align-content: center;
        flex-direction: column;
    }
    
    .avisos{
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
        gap: 1.4rem;
        border-radius: 15px;
        width: 100%;
        height: 50%;
        

        h1{
            font-family: 'Bitter', serif;
            font-style: normal;
            font-weight: 800;
            font-size: 7vw;
            line-height: 7vw;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            letter-spacing: 0.1rem;
            transition: 4s;
            
            text-shadow: black 0.1em 0.1em 0.2em;
            
            /* user-select: none; */
            &.something {
                background: var(--color-amareloqueimado);
            }

        }
        p{
            
            font-size: 20px;
            font-weight: 200;

        }
        a{
            background: var(--color-amareloqueimado);
            width: 30%;
            display: flex;
            font-size: 20px;
            align-items: center;
            padding: 0.5rem;
            border-radius: 15px;
            justify-content: center;
            transition: 1s;
            font-weight: 300;

            &:hover{
                background: var(--color-amarelo);
            }
        }
        
    }

    @media (max-width: 700px) {
        .imgrande{
            display: none;
        }
        .impequena{
            display: flex;
            width: 100%;
            height: 35rem;
            
        }
        .avisos{
            h1{
                font-size: 12vw;
                line-height: 15vw;
            }
            a{
                width: 70%;
            }
        }
    }
    
`

export const Image = styled.img`


`