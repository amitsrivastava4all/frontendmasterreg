import React from 'react';
import {Header} from './components/header';
import {Switch, Route} from 'react-router-dom';
import {Home} from './components/Home';
import {About} from './components/About';
import {News} from './components/News';
import './App.css';
import { withRouter } from "react-router-dom";
 class App extends React.Component{
  constructor(props){
    super(props);
  }
  redirect(){
    console.log('History is ',this.props);
    this.props.history.push("/contact");
  }
  render(){
    return (
      <div>
        <h1>SPA Demo</h1>
        <Header/>
        <hr/>
        <button onClick={this.redirect.bind(this)}>Redirect to Contact</button>
        <Switch>
          <Route   exact path="/" component={Home}/>
          <Route   path="/about" component={About}/>
          
          <Route exact  path="/news/:city/:area" component={News}/>
          <Route exact   path="/contact" render={()=><h1>I am Contact</h1>}/>
        </Switch>
      </div>
    )
  }
}
export default withRouter(App);