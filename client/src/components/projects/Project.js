import React from "react";

function Project(props) {
    return (
        <div className={"project-position-" + props.position}>
            <div className="project-container">
                <div 
                    className="project-header"
                    style={{backgroundImage: "url(" + props.imgUrl + ")"}}
                >
                </div>

                <div className="project-body">
                    <div className="project-body-header">
                        <div className="project-body-header-text">
                            <h1>{props.title}</h1>
                        </div>
                        <a href={props.git}>
                            <img className="github-icon" src="https://image.flaticon.com/icons/png/512/25/25231.png"></img>
                        </a>
                    </div>
                    <div className="project-body-text">
                        {props.text}
                        <br />
                        <br />
                        <p style={{fontStyle: "italic", display: "inline"}}>To read more, click the </p> 
                        <p style={{fontStyle: "italic", display: "inline", fontWeight: "900"}}>Git </p>
                        <p style={{fontStyle: "italic", display: "inline"}}>icon beside the Title.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;