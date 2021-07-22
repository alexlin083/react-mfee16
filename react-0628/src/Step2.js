import React from 'react';

function Step2(props) {
  return (
    <>
      <div>
        信箱:
        <input
          name="email"
          value={props.getState('email', '')}
          onChange={props.handleChange}
        />
      </div>
      <div>
        地址:
        <input
          name="address"
          value={props.getState('address', '')}
          onChange={props.handleChange}
        />
      </div>
      <div>
        電話:
        <input
          name="phone"
          value={props.getState('phone', '')}
          onChange={props.handleChange}
        />
      </div>
      <button onClick={props.prev}>previous</button>
      <button onClick={props.next}>next</button>
    </>
  );
}

export default Step2;
