import React from 'react';
import { Game } from './containers/Game';
export class App extends React.Component{
  constructor(){
    super();
  }
  render(){
    return (
      <Game/>
    );
  }
}