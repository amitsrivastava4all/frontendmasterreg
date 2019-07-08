import React from 'react';
import {Input} from '../components/Input';
import {Output} from '../components/Output';
export class LikeApp extends React.Component{
    constructor(){
        super();
        this.counter = 0;
        this.state = {count:this.counter};
    }
    doIncrement(){
        this.counter++;
        this.setState({'count':this.counter});
    }
    render(){
        console.log('Render Call');
        return (
            <div>
                <h1>React Like App</h1>
                <Input inc={this.doIncrement.bind(this)}/>
                <Output countDown={this.state.count}/>
            </div>
        );
    }
}