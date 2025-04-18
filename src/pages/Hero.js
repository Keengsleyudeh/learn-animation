import React, { useEffect, useRef } from 'react';
import "../styles/Hero.scss";
import imgGirl from "../assets/girl.webp";
import imgBoy from "../assets/boy.webp";
import arrow from '../assets/arrow.svg';
import { gsap } from 'gsap';

const Hero = () => {
    const content = useRef(null);
    const app = useRef(null);
    const images = useRef(null);
    const tl = useRef(null);

    useEffect(() => {
        // Create timeline instance
        tl.current = gsap.timeline({ delay: 0.8 });
        
        // Images Vars
        const girlImage = images.current.firstElementChild;
        const boyImage = images.current.lastElementChild;
        
        // Content vars
        const headlineFirst = content.current.children[0].children[0];
        const headlineSecond = headlineFirst.nextSibling;
        const headlineThird = headlineSecond.nextSibling;
        const contentP = content.current.children[1];
        const contentButton = content.current.children[2];
    
        // Remove initial flash
        gsap.set(app.current, { visibility: 'visible' });
    
        // Images Animation
        tl.current.from(girlImage, {
            duration: 1.2,
            y: 1280,
            ease: "power3.easeOut"
        }, 'Start')
        .from(girlImage.firstElementChild, {
            duration: 2,
            scale: 1.6,
            ease: "power3.easeOut"
        }, "<+0.2") // "<" refers to the previous animation's start time, "+0.2" adds 0.2 seconds
        .from(boyImage, {
            duration: 1.4,
            y: 1280,
            ease: "power3.easeOut"
        }, "<+0.2")
        .from(boyImage.firstElementChild, {
            duration: 2,
            scale: 1.6,
            ease: "power3.easeOut"
        }, "<+0.2");
    
        // Content Animation
        tl.current.from([
            headlineFirst.children,
            headlineSecond.children,
            headlineThird.children
        ], {
            duration: 1,
            y: 44,
            ease: "power3.easeOut",
            stagger: 0.15,
        }, 'Start')
        .from(contentP, {
            duration: 1,
            y: 20,
            opacity: 0,
            ease: "power3.easeOut"
        }, 1.4)
        .from(contentButton, {
            duration: 1,
            y: 20,
            opacity: 0,
            ease: "power3.easeOut"
        }, 1.6);
    
    }, []);

    return (
        <div className="hero" ref={app}>
            <div className="container">
                <div className="hero-inner">
                    <div className="hero-content">
                        <div className="hero-content-inner" ref={content}>
                            <h1>
                                <div className="hero-content-line">
                                    <div className="hero-content-line-inner">Relieving the burden</div>
                                </div>
                                <div className="hero-content-line">
                                    <div className="hero-content-line-inner">of disease caused</div>  
                                </div>
                                <div className="hero-content-line">
                                    <div className="hero-content-line-inner">by behaviors.</div>
                                </div>
                            </h1>
                            <p>
                                Better treats serious cardiometabolic diseases to transform
                                lives and reduce healthcare utilization through the use of
                                digital therapeutics.
                            </p>
                            <div className="btn-row">
                                <button className="explore-button">Explore
                                    <div className="arrow-icon">
                                        <img src={arrow} alt="arrow"/>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="hero-images">
                        <div ref={images} className="hero-images-inner">
                            <div className="hero-image girl">
                                <img src={imgGirl} alt="girl" />
                            </div>
                            <div className="hero-image boy">
                                <img src={imgBoy} alt="boy" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;