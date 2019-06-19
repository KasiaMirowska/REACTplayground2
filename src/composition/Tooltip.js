import React from 'react';
import './Tooltip.css';




export default class TooltipClass extends React.Component {
    static defaultProps = {
        color: '#01A800',
    };
    render(){
        console.log('here inside the class');
        console.log(this.props);
        return (
            <span className='Tooltip'>
            <span className='Tooltip-content'
                 style={{color: this.props.color}}>
                {this.props.children}
            </span>
            <span className='Tooltip-message'
                style={{color: this.props.color}}>
                {this.props.message}
            </span>
        </span>
        )
    }
}