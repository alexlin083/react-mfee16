import React from 'react';

function ChildA(props) {
  return (
    <>
      <hr />
      <h1>Child A</h1>
      {props.parentData}
      <hr />
    </>
  );
}

export default ChildA;

// import React from 'react';

// function ChildA(props) {
//   // 由父母傳入的data
//   return (
//     <>
//       <hr />
//       <h1>Child A</h1>
//       {props.parentData}
//       <hr />
//     </>
//   );
// }

// export default ChildA;
