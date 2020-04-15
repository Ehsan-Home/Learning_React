import React, { Component } from 'react';
import './App.css';
import Hero from './Hero/Hero'

let phase = 0;


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <h1>Hi. This is Ehsan from react.js :D</h1>
      </div>
      // React.createElement('div' , {className:'App'} , 
      //   React.createElement('h1' , null , 'Hi. This is Ehsan from react.js :DDDD'))

      
    );
  }
}

export default App;
