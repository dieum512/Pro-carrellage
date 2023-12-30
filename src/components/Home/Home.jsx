import React from 'react';
import { VscSend } from "react-icons/vsc"
import './home.css';

const Home = () => (
  <div className="container">
    <div className="home__cont">
      <div className="info__cont">
        <h1>Carrelleur professionel</h1>
        <h3>Des professionnels du carrelage dévoués à embellir votre espace avec précision et expertise, pour un intérieur qui respire l'élégance et le savoir-faire</h3>
        <a href="#contact"><span>Contactez nous</span><span className='send'><VscSend/></span></a>
      </div>
    </div>
  </div>
);

export default Home;
