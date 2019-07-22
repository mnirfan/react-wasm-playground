import React, { PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';

class Amoeba extends PureComponent {
  state = {
    amoeba: null,
    loading: true,
    width: 0,
    height: 0,
  }

  constructor(props) {
    super(props);
    this.loadWasm = this.loadWasm.bind(this);
  }

  async loadWasm() {
    try {
      const amoeba = await import('amoeba-super');
      this.setState({
        amoeba,
      })
    } finally {
      this.setState({
        loading: false,
      })
    }
  }

  componentDidMount() {
    this.loadWasm();
  }

  render() {
    const {
      amoeba,
      loading,
      width,
      height,
      area,
    } = this.state;
    if (loading) return 'Loading wasm module...';
    if (!amoeba) return null;

    return (
      <div>
        <input value={height} onChange={(e) => { this.setState({ height: e.target.value }) }}/>
        <input value={width} onChange={(e) => { this.setState({ width: e.target.value }) }}/>
        <button onClick={() => this.setState({ area: amoeba.Square.new(width, height).area() })}>Calculate</button>
        <p>
          Area of {height} x {width} is {area}
        </p>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Amoeba />
      </header>
    </div>
  );
}

export default App;
