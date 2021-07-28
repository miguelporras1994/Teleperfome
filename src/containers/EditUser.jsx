/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
import '../assets/styles/components/Details.scss';
import { connect } from 'react-redux';
import { handleSubmit2 } from '../actions';

const EditUser = (props) => {

  const { id } = props.match.params;

  const [itemNit, setValues] = useState({

  });

  useEffect(() => {
    fetch(`https://localhost:44389/api/business/${id}`)
      .then((Response) => Response.json())
      .then((data) => setValues(data));
  }, []);

  const handleInput = (event) => {
    setValues({
      ...itemNit,
      [event.target.name]: event.target.value,
    });

  };

  const handleSumbit = (event) => {
    event.preventDefault();
    props.handleSubmit2(itemNit);
    console.log(itemNit);

  };

  return itemNit.length === 0 ? <h1>cargando ..</h1> : (
    <>
      <div className='Container'>
        <h2>Datos  de la persona natural o juridica  que solicita servicio tramites virtuales </h2>
        <form onSubmit={handleSumbit}>
          <div className='content'>
            <p className='title'>Empresa</p>
            <p className='title'>Correo</p>
            <input className='from-input' value={itemNit.company_name} type='text' name='company_name' onChange={handleInput} />
            <input className='from-input' value={itemNit.e_mail} type='text' name='e_mail' onChange={handleInput} />
            <p className='title'> Primer  Nombre</p>
            <p className='title'> Segundo Nombre</p>
            <input className='from-input' value={itemNit.first_name} type='text' name='first_name' onChange={handleInput} />
            <input className='from-input' value={itemNit.second_name} type='text' name='second_name' onChange={handleInput} />
            <p className='title'> Primer  Apellido</p>
            <p className='title'> Segundo Apellido</p>
            <input className='from-input' value={itemNit.first_last} type='text' name='first_last' onChange={handleInput} />
            <input className='from-input' value={itemNit.second_last} type='text' name='second_last' onChange={handleInput} />

          </div>
          <div className='content-button'>
            <button type='submit' className='submit'>
              Guardar Cambios
            </button>
          </div>
        </form>
      </div>
    </>
  );

};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  handleSubmit2,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
