import React, { Component } from 'react';
import './App.css';
import Hero from './Hero/Hero'

let phase = 0;


class App extends Component {
  state = {
    Guys : [
      {name:"Ehsan" , age:25 , hobbies:"Kos sher"},
      {name:"Amir" , age:25 , hobbies:"Kos sher tar"},
      {name:"Mahdi" , age:25 , hobbies:"Khaye mali"},
      {name:"Hossein" , age:25 , hobbies:"Helecopteri"}
    ]
  }
  

  ClickHandler = () => {
    // console.log("worked!")  
    if (phase == 0){
      this.setState({
          Guys : [
          {name:"Ehsan" , age:27 , hobbies:"Kos sher kheiliiiii"},
          {name:"Amir" , age:25 , hobbies:"Kos sher tar"},
          {name:"Mahdi" , age:25 , hobbies:"Khaye mali"},
          {name:"Hossein" , age:25 , hobbies:"Helecopteri"}
        ]
      })
      phase = 1;
      console.log(phase);
    }
    else{
      this.setState({
        Guys : [
        {name:"Ehsan" , age:26 , hobbies:"Kos sher kam"},
        {name:"Amir" , age:25 , hobbies:"Kos sher tar"},
        {name:"Mahdi" , age:25 , hobbies:"Khaye mali"},
        {name:"Hossein" , age:25 , hobbies:"Helecopteri"}
      ]
      })
    phase = 0;
    console.log(phase);
    }
  }


  render() {
    return (
      <div className="App">
        <button onClick={this.ClickHandler}>Switch Button</button>
        <Hero 
          name={this.state.Guys[0].name} 
          age={this.state.Guys[0].age} 
          hobbies={this.state.Guys[0].hobbies}>
          Toole alat : 20cm 
          <hr/>
        </Hero>
        <Hero 
          name={this.state.Guys[1].name} 
          age={this.state.Guys[1].age} 
          hobbies={this.state.Guys[1].hobbies}>
          Toole alat : 100 cm
        </Hero>
        <Hero 
          name={this.state.Guys[2].name} 
          age={this.state.Guys[2].age} 
          hobbies={this.state.Guys[2].hobbies}
          click={this.ClickHandler}/>
        <Hero 
        name={this.state.Guys[3].name} 
        age={this.state.Guys[3].age} 
        hobbies={this.state.Guys[3].hobbies}/>
      </div>
      // React.createElement(
      //   'div',
      //    {className: 'App'} ,
      //    React.createElement(
      //      'h1',
      //      {className:'h1'},
      //      "is this is test?"
      //      )
      // )

      
    );
  }
}

export default App;
