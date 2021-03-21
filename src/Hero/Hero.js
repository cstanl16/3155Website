import React from 'react';
import HeroLogo from '../hero.png';

function Hero() {
    return (
        <div>
            <div className="hero">
                <div className="heroImage">
                    <img src={HeroLogo} alt="hero-logo" width="120" height="120" margin="0"></img>
                </div>
                
                <h1>CollegeToCareer</h1>
            </div>
        </div>
    );
}

export default Hero;
