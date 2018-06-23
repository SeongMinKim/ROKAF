import React, { Component } from 'react';
import './App.css';

class Counter extends Component {
  state = {
    number: 0
  };

  handleIncrease = () => {
    this.setState({
      number: this.state.number + 1
    });
  };

  handlDecrease = () => {
    this.setState({
      number: this.state.number - 1
    });
  };

  reset = {
    number: 0
  };

  render() {
    return (
      <div className="App">
        <h1>Counter</h1>
        <div>값:{this.state.number}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handlDecrease}>-</button>
      </div>
    );
  }
}

export default Counter;
