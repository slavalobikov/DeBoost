import React from 'react';
import './Button.css'


const Button = (props) => {
    return (
        <div >

            <a href={props.a}><button className='button'>{props.text}</button></a>

        </div>
    );
}

export default Button;