import axios from 'axios';

export const loginRequest = (payload) => ({
  type: 'LOGIN_REQUEST',
  payload,
});

export const handleEdit = (payload) => ({
  type: 'LOGIN_REQUEST',
  payload,
});

export const handleSubmit1 = (props) => {
  return (dispatch) => {
    axios({
      url: `https://localhost:44389/api/business/${props.Nit}`,
      method: 'get',
    })
      .then(({ data }) => {
        window.location.href = `http://localhost:8080/edituser/${props.Nit}`;
      }).catch((err) => dispatch(setError(err)));
  };
};

export const handleSubmit2 = (props) => {
  console.log('estoy aqui');
  console.log(props);
  return (dispatch) => {
    axios({
      url: `https://localhost:44389/api/business/${props.identification_number}`,
      method: 'put',
      data: props,

    })
      .then(({ data }) => {
        alert('su informacion fue guardad');
        window.location.href = 'http://localhost:8080';
      })
      .catch((err) => dispatch(setError(err)));
  };
};
