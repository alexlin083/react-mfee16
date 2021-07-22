import React, { useState } from 'react';
import ChildA from './ChildA';
import ChildB from './ChildB';

function Parent() {
  const [parentData, setParentData] = useState('Parent Data');

  const [contrl, setContrl] = useState(true);

  return (
    <>
      <button
        onClick={() => {
          setContrl(!contrl);
        }}
      >
        {contrl ? '讓ChildA消失' : '讓ChildA顯現'}
      </button>
      {contrl && <ChildA parentData={parentData} />}
      <ChildB setParentData={setParentData} />
    </>
  );
}

export default Parent;

// import React, { useState } from 'react';
// import ChildA from './ChildA';
// import ChildB from './ChildB';

// function Parent() {
//   const [parentData, setParentData] = useState('Parent Data');

//   return (
//     <>
//       <ChildA parentData={parentData} />
//       <ChildB setParentData={setParentData} />
//     </>
//   );
// }

// export default Parent;
