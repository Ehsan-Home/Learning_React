import React from 'react';

// const year = (in1) => Math.floor(Math.random() * 20 + in1);

const hero = (props) => {
    return (
    <div>
        <p onClick={props.click}>I am {props.name} and I am {props.age} years old.</p>
        <h6>I also like {props.hobbies}.</h6>
        <div>{props.children}</div>
    </div>
    )
}



export default hero;