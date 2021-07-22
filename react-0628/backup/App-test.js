// import logo from './logo.svg';
// import './App.css';
import React, { useState } from 'react'; //導入 檔名、function名稱、導出名稱 3個要一樣

function App() {
  const [total, setTotal] = useState(9);
  return (
    <>
      <h1
        onClick={() => {
          setTotal(total + 1);
        }}
      >
        {total}
      </h1>
    </>
  );
}

export default App; //導出
