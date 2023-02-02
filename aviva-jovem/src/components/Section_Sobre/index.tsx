/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { TagSection } from './style'
import f1 from '../../assets/img/f1.jpg'
import f2 from '../../assets/img/f2.jpg'
import f3 from '../../assets/img/f3.jpg'
import f4 from '../../assets/img/f4.jpg'
import f5 from '../../assets/img/f5.jpg'


import {Carousel} from '3d-react-carousal';
import Maps from '../Maps'


const SectionSobre = () => {
  let slides = [
    <img  src={f1} alt="1" />,
    <img  src={f2} alt="2" />  ,
    <img  src={f3} alt="3" />  ,
    <img  src={f4} alt="4" />  ,
    <img src={f5} alt="5" />   
  ];

  return (
    <TagSection id='sobre'>
      <div className='container'>
        <h2>Venha viver grandes momentos <div>no Aviva Jovem</div></h2>
        <Carousel slides={slides} autoplay={true} interval={3000}/>

        <div className='info'>
          <p>O Aviva Jovem é um evento criado pela igreja Tabernaculo da fe em Anapolis, 
            com muito carinho e amor para receber jovem de todas as partes do planeta, 
            e termos maravilhosos momentos juntos. Sejam todos muito bem vindos </p>
          <h3>Algumas de nossas atividades:</h3>
          <ul>
            <li>Jantar Especial</li>
            <li>Boia-Cross</li>
            <li>Momento de meditaçao</li>
            <li>Volei</li>
            <li>Futebol</li>
            <li>Banho no rio*</li>

          </ul>
        </div>
      </div>
        <div className='localizaçao'>
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
          width="718.000000pt" height="1280.000000pt" viewBox="0 0 718.000000 1280.000000"
          preserveAspectRatio="xMidYMid meet">
          <g transform="translate(0.000000,1280.000000) scale(0.100050,-0.100000)"
          fill="#DE741C" stroke="none">
          <path d="M3370 12794 c-19 -2 -87 -9 -150 -15 -1051 -99 -2031 -694 -2627
          -1594 -459 -693 -674 -1584 -563 -2330 180 -1204 1094 -3603 2643 -6935 330
          -710 906 -1910 917 -1910 11 0 587 1200 917 1910 1318 2835 2200 5054 2523
          6350 155 621 182 978 110 1470 -122 834 -546 1611 -1185 2169 -554 484 -1211
          776 -1950 867 -122 15 -556 27 -635 18z m560 -2027 c631 -150 1080 -605 1222
          -1239 20 -90 23 -130 23 -313 0 -164 -4 -230 -18 -300 -132 -647 -615 -1132
          -1265 -1267 -155 -32 -449 -32 -604 0 -650 135 -1133 620 -1265 1267 -28 138
          -25 473 5 611 30 139 64 239 127 371 214 450 623 771 1111 872 143 30 141 30
          359 26 171 -3 215 -7 305 -28z"/>
          </g>
        </svg>
          <h3>Localizaçao da Igreja <div>Tabernaculo da fé</div> </h3>
          <Maps />
          <p> Clique  no mapa para ver a localização</p>

        </div>
    </TagSection>
    
  )
}

export default SectionSobre