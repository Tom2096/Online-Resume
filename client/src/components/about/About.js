import React from "react";

import { IoIosDesktop, IoLogoHtml5, IoIosSchool, IoLogoPython } from "react-icons/io";


function About() {
    return (
        <div className="about">
            <div className="about-me">
                <div className="img-container">
                    <div className="about-me-img">
                    </div>
                </div>
                
                <div className="about-me-content">
                    <h1 className="about-me-content-title">About Me</h1>
                    <p className="about-me-content-text">I am currently a student enrolled in the CO-OP Computer Engineering program at the University of Waterloo. I am passionate about coding and improving with every single project. I am familiar with front and back-end React web development, and have built numerous projects relating to Machine Learning. Overall, you will find me to be a team-friendly, dedicated and empathetic individual with a positive attitude and a desire to learn. To learn more, feel free to chat with the assistant on the bottom right of the screen.</p>
                </div>
            </div>

            <div className="skills-header">
                <h1>Skills & Background</h1>
            </div>
            

            <div className="skills">
                <div>
                    <IoIosDesktop style={{fontSize: "4rem"}}/>
                    <h3 className="skills-title">Projects</h3>
                    <p className="skills-text">Built multiple web-projects (including this website) and is not afraid to tackle larger ones to-come. Some projects include: a web budget managener that tracks and smartly display personal spending; a Machine Learning web-app that uses ONNX to recognize user hand gestures; and a Python program that uses OpenCV to read a water-meter. </p>
                </div>
                <div>
                    <IoLogoHtml5 style={{fontSize: "4rem"}}/>
                    <h3 className="skills-title">React</h3>
                    <p className="skills-text">Familar with JavaScript, HTML, CSS and Node.js. Knowledgable on handling API calls and CRUD operations. Is experienced with the React and Express framworks and is capable of building beautiful web-projects that combines the two. </p>
                </div>
                <div>
                    <IoIosSchool style={{fontSize: "4rem"}}/>
                    <h3 className="skills-title">Education</h3>
                    <p className="skills-text">Currently enrolled in the Computer Engineering Bachelor's Degree CO-OP Program at the University of Waterloo. Graduated from Harry Ainaly Highschool with an International Baccalaureate Diploma and two years of school work experience. An active user of LeetCode with over 100 questions completed.</p>
                </div>
                <div>
                    <IoLogoPython style={{fontSize: "4rem"}}/>
                    <h3 className="skills-title">Python</h3>
                    <p className="skills-text">Experienced with Python and its numerous libraries. Familar with Numpy, Pytorch, OpenCV, SKlearn, and Pandas. Used OpenCV to process and read image data and has experience using Pytorch to train a custom net model that predicts hand gestures with 98% accuracy.     </p>
                </div>
            </div>
        </div>
    )
}

export default About;