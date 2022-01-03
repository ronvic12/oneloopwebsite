import React, { useState, useEffect } from 'react';

// preload images so page doesn't jitter when slideshow changes images
// might remove this once we actually have images?
function Preloaded(props) {
    return (
        <div style={{ display: 'none' }}>
            { props.images.map((img, i) => (<img key={ i } src={ img } alt=""/>)) }
        </div>
    );
}

function Dots(props) {
    return (
        <div className="dot-wrapper">
            {
                props.images.map((_, offset) => (
                    <span key={ offset } className={ offset === props.imageOffset ? 'active' : '' } onClick={ () => props.setImageOffset(offset) }>
                    </span>
                ))
            }
        </div>
    )
}

function Slideshow(props) {

    const [ imageOffset, setImageOffset ] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => setImageOffset((imageOffset + 1) % props.images.length), 5000);

        return function cleanup() {
            clearTimeout(timer);
        }
    })

    return (
        <div className="slideshow">
            <div className="frame-wrapper">                
                <img key={ imageOffset } 
                    className="ss-image"
                    src={ props.images[imageOffset] } />
                <img key={ (imageOffset - 1 + props.images.length) % props.images.length } 
                    className="ss-image idle" 
                    src={ props.images[(imageOffset - 1 + props.images.length) % props.images.length]} />
            </div>
            <Dots imageOffset={ imageOffset } setImageOffset={ setImageOffset } images={ props.images } />
            <Preloaded images={ props.images } />
        </div>
    );
}

export default Slideshow;