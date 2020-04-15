import React, { Component } from 'react';
import './App.css';
import Tree from "./Tree/Tree"

let phase = 0;


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <h1>Hi. This is Ehsan from react.js :D</h1>
        <Tree />
      </div>
      // React.createElement('div' , {className:'App'} , 
      //   React.createElement('h1' , null , 'Hi. This is Ehsan from react.js :DDDD'))

      
    );
  }
}

export default App;
