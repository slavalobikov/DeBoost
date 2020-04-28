import React from 'react'
import './ProfileInfo.css'

const PanelInfo = (props) => {

    return (
        <div className='boostGridPanel'>
            <div><a href={props.vk}><img src={props.ava} alt=""/></a></div>
            <div className='panelText'><a href={props.vk}><p>{props.text}</p></a></div>

        </div>
    )
};

export default PanelInfo;