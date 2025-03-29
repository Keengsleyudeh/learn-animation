import React, { useEffect, useRef } from 'react';
import './Picture.scss'; // Import the SCSS file
import myImage from '../assets/test-image.jpg';
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import { Power2, TimelineLite } from 'gsap';

const Picture = () => {

    let container = useRef(null);
    let image = useRef(null);
    let imageReveal = CSSRulePlugin.getRule('.img-container:after');

    let tl = new TimelineLite();

    useEffect(() => {
        tl.to(container, 0, {css: {visibility: 'visible'}}).to(
            imageReveal, 1.4, {width: '0%', ease: Power2.easeInOut},
        ).to(
            image, 1.4, {scale: 1.2,ease: Power2.easeInOut,delay: -1.4}
        )
    });



    return (
        <section className='main'>
            <div ref={el => container = el} className="container">
                <>
                    <div className='img-container'>
                        <img  ref={el=>image=el} src={myImage} alt="My" />
                    </div>
                </>
            </div>
        </section>
    );
};

export default Picture;