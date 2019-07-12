import React from 'react';
import {Products} from '../components/Products';
//import axios from 'axios';
import {instance} from '../utils/axiosconfig';
export class Shop extends React.Component{
constructor(){
    super();
    console.log("Component Init");
    this.state = {items:[]};
}
doAxiosAjax(){
    var pr= instance.get('mobiles.json',{
        // params: {
        //   brand: 'apple'
        // }
    });
    pr.then(data=>{
        console.log('Data is ',data);
        this.setState({'items':data.data['mobiles']});

    }).catch(err=>{

    }).finally(function () {
        // always executed
      })
}
doAjax(){
    console.log('AJAX CALL ');
    var pr = fetch('https://raw.githubusercontent.com/brainmentorspvtltd/myserverdata/master/mobiles.json');
    pr.then(response=>{
        response.json().then(data=>{
            console.log('Data is ',data['mobiles']);
            this.setState({'items':data['mobiles']});
        }).catch(err=>{
            console.log('JSON Error is ',err);
        }).catch(e=>console.log('Server error ',e));
    })
}
componentDidMount(){
    console.log("Component Did Mount");
}
componentWillMount(){
    console.log("Component Will Mount");
    //this.doAjax();
    this.doAxiosAjax();
}
render(){
    console.log("Render Call");
    return (
        <div>
            <Products prods = {this.state.items}/>
        </div>
    );
}
}