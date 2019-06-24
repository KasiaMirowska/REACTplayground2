import React from 'react';

export default class Counter extends React.Component {
    state = {
        count: 0,
    }
    render(){
        return (
        <div>
        <h1>The current count: {this.state.count}</h1>
        <button>Add 1</button>
        </div>
        )
    }
}