import styled from "styled-components";

export const ContainerNav = styled.div`

        display: flex;
        align-items: center;
        position: absolute;
        justify-content: space-between;
        position: fixed;
        
        font-size: 110%;
        font-weight: 200;
        width: 100%;
        z-index: 9999;
        transition: 0.32s ease-in-out;
        background: var(--color-amareloqueimado);
        box-shadow: 0px 11px 15px rgba(0, 0, 0, 0.25);

        .logo{
            display:none;

        }
        .mobile{
            display: none;
        }
        .mobileroxo{
            display: none;
        }
    .container{
        display: flex;
        padding: 2% 10%;
        align-items: center;
        
        transition:  0.32s ease-in-out;
        justify-content: space-between;
        width: 100%;
    }
    .scrolled{
        display: flex;
        padding: 1% 10%;
        align-items: center;
        
        transition:  0.32s ease-in-out;
        justify-content: space-between;
        width: 100%;
        background-color: var(--color-amareloqueimado);
        opacity: 2;
    }
    .roxo{
        display: flex;
        padding: 1% 10%;
        align-items: center;
        
        transition:  1s ease-in-out;
        justify-content: space-between;
        width: 100%;
        background-color: var(--color-roxo);
        opacity: 2;
    }
    .nav{
        display: flex;
        justify-content: flex-end;
        gap: 2rem;
        width: 60%;
        align-items: center;
        align-content: center;
        a{
            padding:3px;
            scroll-behavior: smooth;
            transition:2s;
            
            &:hover{
                text-decoration: overline auto;

            }
        }

    }
    #contato{
        display: flex;
        padding: 10px;
        border: 1px solid var(--color-white) 

    }

    @media (max-width: 700px) {

        bottom: 0;
        box-shadow: 0px 11px 15px rgba(0, 0, 0, 0.25);

        .logo{
            position: fixed;
            top: 0;
            display: flex;
            justify-content: space-between;
            padding: 1% 10%;
            width: 100%;
        }

        .container{
            display: none;
        }
        .scrolled{
            display: none;
        }
        .roxo{
            display: none;
        }

        .mobileroxo{
            display: flex;
            align-items: center;
            justify-content: space-around;
            width: 100%;
            height: 4rem;
            background: var(--color-roxo);
            transition:  1s ease-in-out;
            svg{
                width: 2.5rem;
                height: 100%;
            }
            .sobre{
                width: 1.5rem;
            }
            .pagament{
                width: 1.5rem;
            }
        }

        .mobile{
            display: flex;
            align-items: center;
            justify-content: space-around;
            width: 100%;
            height: 4rem;
            transition:  1s ease-in-out;


            svg{
                width: 2.5rem;
                height: 100%;
            }
            .sobre{
                width: 1.5rem;
            }
            .pagament{
                width: 1.5rem;
            }
        }
    }
`