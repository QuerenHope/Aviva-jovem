import React, { useContext } from 'react'
// import foto from '../../assets/img/8k.jpg';
import avivafoto from '../../assets/img/avivajovem2.jpg'
import foto2 from '../../assets/img/imgpequena.jpg'

import { RouterContext } from '../../context/RouterContext'
import { TagSection } from './style'
// import gsap from 'gsap'

const Section = () => {


  const {loading} = useContext(RouterContext) 
    
  return (
    <TagSection id='home' >
      
      <div className='banner'>
        <img className='imgrande' src={avivafoto} alt="Foto Aviva Jovem" onLoad={loading}/> 
        <img className='impequena' src={foto2} alt="Foto Aviva Jovem" onLoad={loading}/>  
        <div className='avisos'>
          <h1> <div className='p1'>Retiro</div>  <div className='p2'>Aviva Jovem</div> </h1>
          <p>22, 23 e 24 de julho</p>
          <a href='#pagamento' >Faça sua inscrição</a>
        </div>
      </div>
      
    </TagSection>
    )
}

export default Section