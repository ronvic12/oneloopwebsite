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

export default function SponsorEleven({open, children, onClose}){
    if (!open) return null
    return (
        <div style = {OVERLAY_STYLES}>
	        <div className="sponsorPopUp">
				<button onClick={onClose}>&#x2715;</button>
				<p className="Title">Mechanical and Aerospace Engineering Department</p>
				<p>Department offering comprehensive resources for students, 
                faculty, and staff at UC Davis (offering undergraduate advising and research opportunities).
                </p>
                <a href="https://mae.ucdavis.edu/">https://mae.ucdavis.edu/</a>
			</div>
        </div>
    )
}