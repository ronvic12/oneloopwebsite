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

export default function Modal({open, children, onClose}){
    if (!open) return null
    return (
        <div style = {OVERLAY_STYLES}>
            <div className="Popup2018">
                <button onClick={onClose}>X</button>
                <p className="Title">2018-2019</p>
                <p>Safety standards such as OSHA and ASME were adhered 
                to with the regards to pod design, testing, and operation 
                whenever relevant. Furthermore, the year’s propulsion system 
                was modified to be cold gas thrusters which was primarily chosen 
                to reduce the pod’s high voltage requirements and increase 
                electrical safety.</p>
			</div>
        </div>
    )
}

