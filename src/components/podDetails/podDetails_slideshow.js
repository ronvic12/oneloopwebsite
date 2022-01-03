import React, { useState, useEffect } from 'react';

function Preloaded(props) {
    return (
        <div style={{ display: 'none' }}>
            { props.images.map((img, i) => (<img key={ i } src={ img } alt=""/>)) }
        </div>
    );
}

function Dots(props) {
    return (
        <div className="poddetails-dot-wrapper">
            {
                props.images.map((_, offset) => (
                    <span key={ offset } className={ offset === props.imageOffset ? 'active' : '' } onClick={ () => props.setImageOffset(offset) }>
                    </span>
                ))
            }
        </div>
    )
}

function Slideshow() {

    const Images = [
        './images/poddetails_slideshow/poddetails1.jpg',
        './images/poddetails_slideshow/poddetails2.jpg',
        './images/poddetails_slideshow/poddetails3.jpg',
        './images/poddetails_slideshow/poddetails4.jpg',
        './images/poddetails_slideshow/poddetails5.jpg',
        './images/poddetails_slideshow/poddetails6.jpg',
    ];

    const [ imageOffset, setImageOffset ] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => setImageOffset((imageOffset + 1) % Images.length), 3000);

        return function cleanup() {
            clearTimeout(timer);
        }
    })

    return (
        <div className="poddetails-slideshow">
            <div className="poddetails-frame-wrapper">                
                <img key={ imageOffset } 
                    className="poddetails-ss-image"
                    src={ Images[imageOffset] } />
                <img key={ (imageOffset - 1 + Images.length) % Images.length } 
                    className="poddetails-ss-image poddetails-ss-idle" 
                    src={ Images[(imageOffset - 1 + Images.length) % Images.length]} />
            </div>
            <Dots imageOffset={ imageOffset } setImageOffset={ setImageOffset } images={ Images } />
            <Preloaded images={ Images } />
        </div>
    );
}

export default Slideshow;