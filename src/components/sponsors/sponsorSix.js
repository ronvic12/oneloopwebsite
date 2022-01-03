import React, {useState} from 'react'
import './sponsors_body.css';

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
}

export default function SponsorSix({open, children, onClose}){
    if (!open) return null
    return (
        <div style = {OVERLAY_STYLES}>
            <div className="sponsorPopUp">
                <button onClick={onClose}>&#x2715;</button>
                <p className="Title">WC Branham</p>
                <p>For over three decades, WC Branham has been a customer-focused family-owned 
                business which excels in manufacturing power transmissions and fluid power systems. 
                They are also a supplier of many other products that have served across the 
                automotive, medical, and food processing industries.
                </p>
                <a href="https://www.wcbranham.com/index.cfm">https://www.wcbranham.com/</a>
            </div>
        </div>
    )
}