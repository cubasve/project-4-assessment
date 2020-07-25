import React, { Component } from 'react';
import './App.css';
import CircleSelector from './components/CircleSelector/CircleSelector';
import Circles from './components/Circles/Circles';

const circles = [1, 2, 3, 4];

class App extends Component {

  constructor() {
    super();
    this.state = {
      selectedCircleIndex: 1,
    }
  }

  handleCircleSelection = (circle) => {
    console.log(`circle index ${circle} selected`);
    this.setState({ selectedCircleIndex: circle });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector
            circles={circles}
            selectedCircleIndex={this.state.selectedCircleIndex}
            handleCircleSelection={this.handleCircleSelection}
          />
          <Circles
            circles={circles}
            selectedCircleIndex={this.state.selectedCircleIndex}

          />
        </main>
      </div>
    );
  }
}

export default App;
