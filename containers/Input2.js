import React from 'react';
export class Input2 extends React.Component{
    constructor(){
        super();
        this.state = {sum:0};

    }
    add(){
       var sum  =  parseInt(this.refs.a1.value) +  parseInt(this.refs.a2.value) + parseInt(this.refs.a3.value) + parseInt(this.refs.a4.value);
        this.setState({sum:sum});
    }
render(){
    return (
        <div>
            <p>Sum is {this.state.sum}</p>
            <input ref="a1" type='text'/>
            <input ref="a2" type='text'/>
            <input ref="a3" type='text'/>
            <input ref="a4" type='text'/>
            <button onClick={this.add.bind(this)}>Add</button>
            </div>
    )
}
}