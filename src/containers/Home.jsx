/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import '../assets/styles/components/Home.scss';
import '../assets/App.scss';
import Valide from '../components/Valide';

const Home = () => {

  return (
    <>
      <div className='Container'>
        <h1>Incripcion al servicio</h1>

        <p>
          Ingrese el  NIT de la persona  Natural o juridica  para la realizar el tramite,
          sin incluir el digito de verificacion. luego selecione  Continuar para completar su solictud
        </p>

        <Valide />
      </div>
    </>
  );
};

export default Home;
