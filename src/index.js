import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../style/style.css';

class App extends Component{
  render(){
    return (
      <div>
        <h1>Solo</h1>
      </div>
    )
  }
};

ReactDOM.render(<App />, document.getElementById('root'));
