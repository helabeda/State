import React, { Component } from 'react';
import List from './Component/List';
import './App.css';

export class App extends Component {
  state ={
    isVisible: false
  }
  toggleVisibility = () => {
    this.setState({
        isVisible: !this.state.isVisible
    })
  }
  render() {
    return (
      <div>
      
        {this.state.isVisible ? <List /> : <h2>Click the button </h2> }
        <button className="visibility.btn" onClick={this.toggleVisibility}>{this.state.isVisible ? 'Hide List' : 'Show List'}</button>
      </div>
    )
  }
}

export default App

