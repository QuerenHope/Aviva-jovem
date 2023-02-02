import { useEffect, useState } from "react";
import { ContainerNav } from "./style";
import {AiFillHome, AiFillQuestionCircle} from 'react-icons/ai'
import {FaMoneyCheck} from 'react-icons/fa'

export const Header = () => {
  const [scrolled, setScrolled] = useState('container');

  const [scrolledMobile, setScrolledMobile] = useState('mobile');


  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled('scrolled');
        
      } 
      else{
        setScrolled('container')
        setScrolledMobile('mobile')
      }
      if(window.scrollY > 900){
        setScrolled('roxo')
        setScrolledMobile('mobileroxo')
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  return (
    
      <ContainerNav >
        <div className={scrolled} >
          <a href="/">
            Logo
          </a>
          <div className="nav">
            <a href="#home">Home</a>
            <a href="#pagamento">Pagamento</a>
            <a href="#sobre" >Sobre</a>
            <a href='#connect' id="contato">
              <button className="vvd"><span>Contato</span></button>
            </a>
          </div>
        </div>
        <div className={scrolledMobile}>
          <a href="#pagamento" >
            <FaMoneyCheck className="pagament"/>
          </a>
          <a href="#home">
            <AiFillHome />
          </a>
          <a href="#sobre" >  
            <AiFillQuestionCircle className="sobre"/>
          </a>
        </div>

        <div className="logo">
          <a href="/">
            Logo
          </a>          
          <a href="/">
            Logo
          </a>
        </div>
        
      </ContainerNav>
    
  )
}