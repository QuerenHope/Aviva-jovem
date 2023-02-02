import React, { useContext } from 'react'


import { Header } from './components/Header';
import Section from './components/Section';
import SectionPay from './components/Section_Pagamento';
import { WhatsApp } from "react-whatsapp-component";
import SectionSobre from './components/Section_Sobre';
import './styles/style.css'
import Loader from './components/Loader';
import { RouterContext } from './context/RouterContext';

function App() {
  const { isLoaded} = useContext(RouterContext) 

  return (
    <div className="App">
      <Header />
      <Section />
      { !isLoaded && <Loader />}
      <SectionSobre/>
      <SectionPay />  
      <WhatsApp style={{bottom:'78px'}} phone="5562991025363" text="Oii queren tudo bem?" />

    </div>
  );
}

export default App;
