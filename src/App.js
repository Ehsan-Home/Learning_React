import React, { Component } from 'react';
import './App.css';
import Tree from "./Tree/Tree"


class App extends Component {

  state = {
    Tree1 : {
      name : "Chenar",
      height : "600cm",
    },
    Tree2 : {
      name : "Kaj",
      height : "520cm",
    },
    Tree3 : {
      name : "Sarvenaz",
      height : "720cm",
    },
  }
  
  switchStateHandler = () => {
    console.log("in handler")
    this.setState(
      {
        Tree2 : {
          name: "CHHHH",
          height : "900cm",
        },
        Tree3 : {
          name:'Ehsan',
          height : "1000",
        },
        Tree4 : {
          name:'asghar',
          height : "200",
        },
      }
      )
  }


  render() {
    return (
      <div className="App">
        <h1>Hi. This is Ehsan from react.js :D</h1>
        <button onClick={this.switchStateHandler}>Submit</button>
        <Tree name={this.state.Tree1.name} Height={this.state.Tree1.height}/>
        <Tree name={this.state.Tree2.name} Height={this.state.Tree2.height}/>
        <Tree name={this.state.Tree3.name} Height={this.state.Tree3.height}>Fruite:not clear</Tree>
      </div>
      // React.createElement('div' , {className:'App'} , 
      //   React.createElement('h1' , null , 'Hi. This is Ehsan from react.js :DDDD'))

      
    );
  }
}

export default App;
