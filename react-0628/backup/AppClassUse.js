// import logo from './logo.svg';
// import './App.css';
import React from 'react'; //導入 檔名、function名稱、導出名稱 3個要一樣

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      total: 10,
    };
  }

  render() {
    return (
      <>
        <h1
          onClick={() => {
            this.setState({ total: this.state.total + 1 });
          }}
        >
          {this.state.total}
        </h1>
      </>
    );
  }
}

export default App; //導出
