import React from 'react';

function FinalStep(props) {
  return (
    <div>
      <p>name: {props.state.name}</p>
      <p>password: {props.state.password}</p>
      <p>repassword: {props.state.repassword}</p>
      <p>email: {props.state.email}</p>
      <p>address: {props.state.address}</p>
      <p>phone: {props.state.phone}</p>
    </div>
  );
}

export default FinalStep;
