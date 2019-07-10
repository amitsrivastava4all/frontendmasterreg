import React from 'react';
import {TicButton} from '../components/TicButton';
import './game.css';
import {Input} from '../components/Input';
import {Input2} from './Input2';
export class Game extends React.Component{
  constructor(){

    super();
    this.inputs = {};
    this.val = '';
    this.matrix = [['','',''],['','',''],['','','']];
    this.msg = "";
    this.cls = 'red';
    this.isPaid = false;
    this.isXorZero = false;
    this.state = {inputs:this.inputs, val:this.val, msg:'',cls:this.cls, isPaid:this.isPaid};
  }

  printXorZero(row, col){
      
    this.msg = this.isXorZero?"X":"0";
    this.matrix [row-1][col-1]= this.msg;

    this.setState({msg:this.msg});
    this.isXorZero = !this.isXorZero;
  }
  free(){
    return (
      <h1>Free User</h1>
    )
  }
  paid(){
    return (
      <h1>Paid User</h1>
    )
  }
  takeInput(event){
    this.inputs[event.target.id] = event.target.value;
    console.log('ID is ',event.target.id);
    this.val = event.target.value;
    this.setState({...this.state, inputs:this.inputs});
  }

  render(){
    var style = {
        backgroundColor:'red',
        color:'yellow'
    };
    return (
      <div>
        <Input2/>
        <p>Input Value is Name {this.state.inputs['name']}  age  {this.state.inputs['age']}</p>
        <Input in={this.takeInput.bind(this)}/>
        <p style={style}>I am Inline Style</p>
          {this.state.isPaid?this.paid():this.free()}
        <button onClick={()=>{
          this.isPaid = !this.isPaid;
          this.cls = this.cls=='red'?'green':'red';
            this.setState({...this.state,cls:this.cls,isPaid:this.isPaid});
        }}>Class Change</button>
        <h1 className={this.state.cls}>Tic Tac Toe Game</h1>
        <table>
            <tr>
                <TicButton row="1" col="1" msg={this.matrix[0][0]} tap={this.printXorZero.bind(this)}/>
                <TicButton row="1" col="2" msg={this.matrix[0][1]} tap={this.printXorZero.bind(this)}/>
                <TicButton row="1" col="3" msg={this.matrix[0][2]} tap={this.printXorZero.bind(this)}/>
            </tr>
            {/* <tr>
                <TicButton msg={this.state.msg} tap={this.printXorZero.bind(this)}/>
                <TicButton msg={this.state.msg} tap={this.printXorZero.bind(this)}/>
                <TicButton msg={this.state.msg} tap={this.printXorZero.bind(this)}/>
            </tr>
            <tr>
                <TicButton msg={this.state.msg} tap={this.printXorZero.bind(this)}/>
                <TicButton msg={this.state.msg} tap={this.printXorZero.bind(this)}/>
                <TicButton msg={this.state.msg} tap={this.printXorZero.bind(this)}/>
            </tr> */}
        </table>
        </div>
    );
  }
}