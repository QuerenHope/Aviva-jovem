import styled from 'styled-components'

export const TagSection = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-family: 'Bitter', serif;
    color: var(--color-white);
    background: var(--color-roxo);
    
    

    form{
        display: flex;
        gap: 20px;
        font-weight: 200;
        width: 100%;
        
        flex-direction: column;
        align-items: flex-start;
        padding:10%;

        
        
        
        input{
            height: 2rem;
            width: 100%;
            border-radius: 3px;
            padding: 5px;
            border: 1px solid #ffffff4b;
            color: var(--color-white);
        }
        .formulario{
            display: flex;
            gap: 14px;
            width:100%;
            flex-direction: column;
            align-items: flex-start;
        }

        .cidade{
            display: flex;
            gap: 7px;
            margin: 9px 0;
            flex-direction: row;
            align-content: center;
            align-items: center;
        }

        button{
            
            border: 1px solid #ffffff3b;
            color: white;
            width: 100%;
            display: flex;
            font-size: 20px;
            align-items: center;
            padding: 1rem;
            border-radius: 15px;
            justify-content: center;
            transition: 1s;
            font-weight: 600;
            font-family: 'Bitter', serif;

            &:hover{
                background:  linear-gradient(0deg, rgba(89,62,103,0.5942752100840336) 0%, rgba(184,91,86,1) 100%, rgba(132,73,95,1) 100%);
            }
        
        }
    
    }
    .pay{
        background: linear-gradient(90deg, rgba(89,62,103,1) 0%, rgba(132,73,95,1) 15%, rgba(184,91,86,1) 44%, rgba(222,116,28,1) 100%);
        border-radius: 15px;
    }
    
    @media (max-width: 700px) {
        flex-direction: column;

        form {
            

        }
    }
`