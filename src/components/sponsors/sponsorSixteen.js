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

export default function SponsorSixteen({open, children, onClose}){
    if (!open) return null
    return (
        <div style = {OVERLAY_STYLES}>
	        <div className="sponsorPopUp">
				<button onClick={onClose}>&#x2715;</button>
				<p className="Title">TCMetal Electric Steel</p>
				<p>Provides high quality grain oriented and non-oriented electrical 
                steel to the leading manufacturers in North America. With high 
                efficiency cores that meet their high quality standards.
                </p>
                <a href="https://tcmetal.com/">https://tcmetal.com/</a>
			</div>
        </div>
    )
}