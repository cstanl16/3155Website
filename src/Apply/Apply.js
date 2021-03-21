import React from 'react';
import calender from '../calender.png';

export const Apply = () => {
    return (
        <div className = "profilePage">
            <h3 class="arial" align="center" > 
                | <a href="Jobs.html">Jobs</a>  
                | <a href="CareerFairs.html">Career Fair</a>  
                | <a href="MockInterviews.html">Mock-Interviews</a> |
            </h3>
            
            <div text-align="center">
                <img src={calender} alt="hero-logo" width="800" height="600"></img>
            </div>
        </div>
    );
}

export default Apply;
