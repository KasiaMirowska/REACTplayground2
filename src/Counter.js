import React from 'react';

export default class Counter extends React.Component {
    static defaultProps = {
        step: 3,
    }
    constructor(props){
        console.log('props in constructor', props)
        super(props)
        this.state = {
            count: props.count,
        }
    }
    

    handleClick() {
        let newCount = this.state.count + this.props.step;
        this.setState({
            count: newCount,
        })
    }
    render(){
        return (
        <div>
        <h1>The current count: {this.state.count}</h1>
        <button onClick={() => this.handleClick()}>Add 1</button>
        </div>
        )
    }
}