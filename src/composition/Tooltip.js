import React from 'react';
import './Tooltip.css';


export default function Tooltip(props) {
    return (
        <span className='Tooltip'>
            <span className='Tooltip-content'
                 style={{color: props.color}}>
                {props.children}
            </span>
            <span className='Tooltip-message'
                style={{color: props.color}}>
                {props.message}
            </span>
        </span>
    )
}