import React from 'react';
import './Comments.css'

const Comments = (props) => {
    return (
        <div className='commentsGrid'>
            <div>
                <div>
                    <p> {props.name}</p>
                </div>
                <div>
                    <img src={props.ava} alt=""/>
                </div>
            </div>
            <div >
                <p className='xxx'>{props.text}</p>
            </div>

        </div>
    )
};

export default Comments;