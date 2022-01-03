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

export default function SponsorEight({open, children, onClose}){
    if (!open) return null
    return (
        <div style = {OVERLAY_STYLES}>
	        <div className="sponsorPopUp">
				<button onClick={onClose}>&#x2715;</button>
				<p className="Title">Fluid Flow</p>
				<p>FluidFlow is a pipe flow design software allowing 
                users to design pressure drop systems of any needs. 
                Flows can include non-newtonian and slurry flow, 
                two-phase flow, thermal energy transfer and compressible flow for example.</p>
                <a href="https://fluidflowinfo.com">https://fluidflowinfo.com</a>
            </div>
        </div>
    )
}