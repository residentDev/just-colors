import react, { Component } from 'react';
import './App.css';

export default class App extends Component{

  colors = ["red", "orange", "green", "black", "lightgreen", "blue", "lightblue", "white"]

  state = {
    color : this.colors[Math.floor(Math.random() * this.colors.length)]
  }

  changeColor = () =>{
    this.setState({
      color : this.colors[Math.floor(Math.random() * this.colors.length)]
    })
  }
  render(){
    return (
      <div onClick={this.changeColor} className="App" style={{backgroundColor : this.state.color}}>
        {this.state.color === "black" && <h1 id={this.state.color}>BLACK is M00D</h1>}
        {this.state.color === "white" && <h1 id={this.state.color}>WHITE is PEACE</h1>}
      </div>
    )
  }
}
