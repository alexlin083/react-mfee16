import React from 'react';

function Step1(props) {
  return (
    <>
      <div>
        帳號:
        <input
          name="name"
          value={props.getState('name', '')}
          onChange={props.handleChange}
        />
      </div>
      <div>
        密碼:
        <input
          name="password"
          value={props.getState('password', '')}
          onChange={props.handleChange}
        />
      </div>
      <div>
        確認密碼:
        <input
          name="repassword"
          value={props.getState('repassword', '')}
          onChange={props.handleChange}
        />
      </div>
      <button onClick={props.next}>next</button>
    </>
  );
}

export default Step1;
