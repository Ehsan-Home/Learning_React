import React from 'react';

import './Tree.css';

const tree = (props) => {
    return (
        <div className="Tree">
            <p onClick={props.click}>This is a {props.name} with height of {props.Height} </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name}/>
        </div>
    )
}

export default tree;