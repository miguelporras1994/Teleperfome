/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-indent */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { handleSubmit1 } from '../actions';

import '../assets/styles/components/Header.scss';

const Valide = (props) => {

  const [itemNit, setValues] = useState({
    Nit: '',
  });

  const handleInput = (event) => {
    setValues({
      ...itemNit,
      [event.target.name]: event.target.value,
    });

  };

  const handleSumbit = (event) => {
    event.preventDefault();
    props.handleSubmit1(itemNit);
    console.log(itemNit);

  };

  return (
    <>
      <form onSubmit={handleSumbit}>
        <div>
          <input
            type='text'
            name='Nit'
            className='search'
            onChange={handleInput}
          />
        </div>
        <div>
          <button className='submit-home' type='submit'>
          Continuar >
          </button>

          <button className='submit-home submit-back'>
             Regresar
          </button>
        </div>
      </form>
    </>

  );
};

const mapDispatchToProps = {
  handleSubmit1,
};

export default connect(null, mapDispatchToProps)(Valide);

