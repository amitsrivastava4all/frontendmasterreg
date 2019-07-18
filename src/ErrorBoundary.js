import React from 'react';
export class ErrorBoundary extends React.Component{
    constructor(){
        super();
        this.state = {};
    }
    componentDidCatch(error, info) {
        this.setState({ hasError: true });
     }

render(){
    var jsx = (<p></p>);
    if(this.state.hasError){
        jsx = (<h1>Something went wrong</h1>);
    }
    return (
        {jsx}
    )
}
}