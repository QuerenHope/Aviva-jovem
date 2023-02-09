import styled, { keyframes } from 'styled-components'

export const BounceAnimation = keyframes`
  0% { 
    margin-bottom: 0; 
  }

  50% { 
    margin-bottom: 1rem;
  }

  100% { 
    margin-bottom: 0;
  }
`


export const LoadingWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 50vh;
  
`

// export const Dot = styled.div`
//   background-color: black;
//   border-radius: 50%;
//   width: 0.75rem;
//   height: 0.75rem;
//   margin: 0 0.25rem;
// `

export const Dot = styled.div<{ delay: string }>`
  background-color: var(--color-amarelo);
  border-radius: 50%;
  width: 2.75rem;
  height: 2.75rem;
  margin: 0 0.25rem;
  /*Animation*/
  animation: ${BounceAnimation} 0.8s linear infinite;
  animation-delay: ${(props) => props.delay};
  background: chocolate;
`