import React from 'react';
import { Header } from './components/header';
import { Footer } from './components/footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const App = ()=>{
    var name = 'Ramesh';
    //Footer(myname)
return (<div>
    <Header/>
    <Footer myname={name}/>  
</div>);
}
//const App = ()=>React.createElement("h1",null,null,"Hello react");
//const App = ()=>React.createElement("div",null,React.createElement("h1",null,null,"HelloReact"));
export default App;