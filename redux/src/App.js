import React from 'react';
import {Input} from './components/Input';
import  Output  from './components/Output';
import {store} from './models/store';
import {mathActionCreator} from './models/actioncreators/mathactioncreator';
export class App extends React.Component{
  constructor(props){
    super(props);
    this.obj = {};
  }
  takeNumber(event){
    var val = event.target.value;
    var key = event.target.id;
    this.obj[key] = val;
  }
  add(){
    var action = mathActionCreator(this.obj.first, this.obj.second,'+');
    store.dispatch(action);
  }
  render(){
    return (
      <div>
         <h1>Calc App</h1>
         <Input add={this.add.bind(this)} takeinput={this.takeNumber.bind(this)}/>
        <Output/>
      </div>
    )
  }
}