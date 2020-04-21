import React from 'react';

const tree = (props) => {
    return (
        <div>
            <p onClick={props.click}>This is a {props.name} with height of {props.Height} </p>
            <p>{props.children}</p>
        </div>
    )
}

export default tree;