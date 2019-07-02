import React from 'react';
import './Demo.css';


export default function Demo(props) {
    return (
        <div className='demo'>
            A {props.name} comes from {props.country}
        </div>
    )
}