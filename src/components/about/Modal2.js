import React, {useState} from 'react'
import './about_body.css';

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
}

export default function Modal2({open, children, onClose}){
    if (!open) return null
    return (
        <div style = {OVERLAY_STYLES}>
            <div className="Popup2017">
    			<button onClick={onClose}>X</button>
    			<p className="Title">2017-2018</p>
    			<p>It is important to mention that during this time 
                the linear induction motor had not yet been perfected. 
                However the team wanted to test their current version of the 
                LIM as it is a system crucial for energy efficient long distance 
                travel. The industrial air bearings were chosen at the time to 
                allow travel over non ideal surfaces that had small cracks such 
                as shop floors. The bearings can lift up to 1000 lbs making its 
                potential payload particularly effective. </p>
    		</div>
        </div>
    )
}