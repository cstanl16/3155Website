import React, { Component } from 'react';
import Axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import  { withAuth0} from '@auth0/auth0-react';
import { Auth0Context } from '@auth0/auth0-react';
import stockUser from '../stockUserPhoto.jpg';


class Profile extends Component {

    constructor(props) {
        super(props);

        
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeCost = this.onChangeCost.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '', 
            description: '',
            cost: 0,
            date: new Date(),
        };
    };

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    };

    onChangeCost(e) {
        this.setState({
            cost: e.target.value
        });
    };

    onChangeDate(date) {
        this.setState({
            date: date //MAKE THIS GET TODAYS DATE
        });
    };

    onSubmit(e) {
        e.preventDefault();

        const { user } = this.context;
        const name = user.name;

        const budget = {
            username: name,
            description: this.state.description,
            cost: this.state.cost,
            date: this.state.date
        };

        console.log(budget);

        Axios.post('https://final-project-node-server-pbfph.ondigitalocean.app/budget/add', budget)
            .then(res => {
                console.log(res.data);
                window.location = '/dashboard';
            });
    };

    focus() {
        // Explicitly focus the text input using the raw DOM API
        this.textInput.focus();
    };
    
    static contextType = Auth0Context;
    
    
    render() {
        return (
            <div className="profilePage">   

                <div className="profileAbout">
                    <div className="profilePhoto">
                        <img src={stockUser} alt="hero-logo" width="120" height="120"></img>
                    </div>

                    <a>
                        Cameron Stanley
                        UNCC Computer Science Student | Software Engineering Concentration | Java, Python, HTML5, CSS3
                        Charlotte, North Carolina, United States    
                    </a>
                </div>

                <div className="profileAbout">
                    <h2>About</h2>
                    <a>
                    I am looking for an internship with a company in the Charlotte or Wilmington area for the summer of 2020. 
                    I have intermediate skills in multiple programming languages such as Java, Python, HTML, and CSS. 
                    With these skills i am able to develop functional websites, small apps, and programs to do almost anything in java. 
                    I am excited to learn more about programming and hoping to further my knowledge to the point of being able to develop apps that are 
                    not only functional, but also secure.
                    I am also a volunteer with the Brunswick County Robotics Team and help them with their programming to run the robot they use in competitions.  
                    </a>
                </div>

                <div className="profileAbout">
                    <h2>Education</h2>

                    <a className="profileSchool">
                        Brunswick County Early College High School
                    </a>
                    <a className="profileAttribute">
                        High School Diploma
                    </a>
                    <a className="profileAttribute">
                        Graduated: May 2018
                    </a>

                    <hr className="border"/>

                    <a className="profileSchool"> 
                        Brunswick Community College 
                    </a>
                    <a className="profileAttribute"> 
                        Associates of Science
                    </a>
                    <a className="profileAttribute">
                        Graduated: May 2018
                    </a>

                    <hr className="border"/>

                    <a className="profileSchool">
                        University of North Carolina at Charlotte
                    </a>
                    <a className="profileAttribute">
                        Computer Science Concentration of Software Engineering
                    </a>
                    <a className="profileAttribute">
                        Graduated: Dec 2021
                    </a>

                </div>

                <div className="profileAbout">
                    <h2>Experience</h2>

                    <a className="profileJob">
                        AutoZone
                    </a>
                    <a className="profileAttribute">
                        Parts Sales Manager
                    </a>
                    <a className="profileAttribute">
                        July, 2018 - Present
                    </a>

                    <hr className="border"/>

                    <a className="profileJob"> 
                        Bald Head Island
                    </a>
                    <a className="profileAttribute"> 
                        Outfitter
                    </a>
                    <a className="profileAttribute">
                        May, 2019 - Present
                    </a>

                </div>

            </div>
        );
    };
};

export default withAuth0(Profile);


/*--------------------------------------------------------------------
<div className="ProfilePage">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>

<div className="profilePhotoContainer">
    <img className="profilePhoto"></img>
</div>

<input id="imageUpload" type="file" 
    name="profile_photo" placeholder="Photo" required="" capture>
</input>

<form className="createBudgetForm" onSubmit={this.onSubmit}>
    <div>
        <label>Name:</label>
        <input type="text" className="createBudgetInput" />
    </div>

    <div>
        <label> Birthday: </label>
            <DatePicker className="createBudgetInput"/>
    </div>

    <div>
        <label>School: </label>
        <input type="text" className="createBudgetInput"/>
    </div>

    <div>
        <label>Major: </label>
        <input type="text" className="createBudgetInput" />
    </div>

    <div>
        <label>Graduation Date: </label>
            <DatePicker className="createBudgetInput" />
    </div>

    <div>
        <input type="submit" className="createBudgetButton" value="Create New Budget Item" />
    </div>
</form>
-----------------------------------------------------------------------------------*/