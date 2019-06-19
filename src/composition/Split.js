import React from 'react';
import './Split.css'


function Split(props) {
    const combinedClassNames = `split ${props.className}`;
    const newStyles = { flex: props.flexBasis };
    return (
        <div className = {combinedClassNames}
                style = {newStyles}>
           {props.children}
        </div>
    )
}
export default Split;