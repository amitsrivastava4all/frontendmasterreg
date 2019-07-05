import {Component} from 'react';
import React from 'react';
export class Like extends Component{
  constructor(props){
    super(props);
    this.counter = 0;
    this.state = {count:this.counter};
    console.log("Like Cons Call ",this.counter);
    
  }
  increment(){
    console.log("This is ",this);
    this.counter++;
    this.setState({count:this.counter});
    console.log("Increment call ",this.counter);
   
  }

  render(){
    console.log("Render Call ",this.counter);
    return (
      <div>
        <h1>I am Smart Component {this.props.title}</h1>
        <button onClick={this.increment.bind(this)}>Like</button>
        <p>Like is {this.state.count}</p>
        </div>
    );
  }

}