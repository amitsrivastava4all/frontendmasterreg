import React from 'react';
import {Input} from './components/Input';
import  Output  from './components/Output';
import {store} from './models/store';
import {actionNames} from './models/actiontypes';
import {ActionCreator} from './models/actioncreators/asyncactioncreator';
import {mathActionCreator} from './models/actioncreators/mathactioncreator';
import {ErrorBoundary} from './ErrorBoundary';
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
    store.dispatch(ActionCreator(actionNames.ADD,this.obj.first, this.obj.second));
    //var action = mathActionCreator(this.obj.first, this.obj.second,actionNames.ADD);
    //store.dispatch(action);
  }
  sub(){
    var action = mathActionCreator(this.obj.first, this.obj.second,actionNames.SUBTRACT);
    store.dispatch(action);
  }
  render(){
    return (
      <div>
        {/* <ErrorBoundary> */}
         <h1>Calc App</h1>
         <Input sub={this.sub.bind(this)} add={this.add.bind(this)} takeinput={this.takeNumber.bind(this)}/>
        <Output/>
        {/* </ErrorBoundary> */}
      </div>
    )
  }
}