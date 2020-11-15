import React from "react";
import { Provider } from "react-redux";
import Project from "./Project";

const data = [
    {
        imgUrl: "../p1.png",
        title: "ONNX Gesture Recognizer",
        git: "https://github.com/Tom2096/Gestures-YT-Scripts",
        text: "This program recognizes the user's hand gesture and performs an assigned action on a Youtube video. Firstly, the program takes input from the user's webcam and uses the Handpose Detection model provided by TensorFlow.js to discern 21 different hand landmarks. The landmarks are then run through a custom built net model trained initally by Pytorch, then converted into ONNX format to use in React. The output is the model's prediction on the user's hand gesture.",
        position: "left"
    },
    {
        imgUrl: "../p2.png",
        title: "OpenCV Water Meter Monitor",
        git: "https://github.com/Tom2096/Water-Meter-Monitor",
        text: "This is a program developed in Python using OpenCV and Numpy. It takes a snapshot of a water meter and reads the value indicated by the arm of the odometer. The image taken is then processed and denoised, and the direction of the arm is determined by finding the prinicple axis through computing the data's eigenvalues and vectors.",
        position: "right"
    },
    {
        imgUrl: "../p3.png",
        title: "Budget Mananger",
        git: "https://github.com/Tom2096/budget-app",
        text: "This is a web-based application that helps the user to better visualize and interact with their everyday transactions. It comes with a fully functional filtering system, a search system, and a dynamic doughnut chart.",
        position: "left"
    }
]


function Projects() {

    return (
        <div className="projects">

            <div className="projects-header">
                <h1>Finished Projects</h1>
            </div>
            {data.map((item, idx) => 
                <Project 
                    key={idx}
                    imgUrl={item.imgUrl}
                    title={item.title}
                    git={item.git}
                    text={item.text}
                    position={item.position}
                />
            )}
        </div>
    )
}

export default Projects;