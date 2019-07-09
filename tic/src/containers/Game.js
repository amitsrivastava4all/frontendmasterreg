import React from 'react';
import {TicButton} from '../components/TicButton';
export class Game extends React.Component{
  constructor(){
    super();
    this.matrix = [['','',''],['','',''],['','','']];
    this.msg = "";
    this.isXorZero = false;
    this.state = {msg:''};
  }

  printXorZero(row, col){
      
    this.msg = this.isXorZero?"X":"0";
    this.matrix [row-1][col-1]= this.msg;
    this.setState({msg:this.msg});
    this.isXorZero = !this.isXorZero;
  }

  render(){
    return (
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
     
    );
  }
}