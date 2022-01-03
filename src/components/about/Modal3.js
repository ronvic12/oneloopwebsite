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

export default function Modal3({open, children, onClose}){
    if (!open) return null
    return (
        <div style = {OVERLAY_STYLES}>
            <div className="Popup2019">
    			<button onClick={onClose}>X</button>
    			<p className="Title">2019-Present</p>
    			<p>The acquisition of sponsorship with ANSYS allowed the team to extensively simulate their pod models. With the help of computer aided software, the team was able to drastically improve their mathematical models as well as better ways to integrate the pod.</p>
    		</div>
        </div>
    )
}