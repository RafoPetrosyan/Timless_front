import React from "react";
import "./style.scss";

const AboutInfoCard = ({icon, title, text}) => {
    return (
        <div className="aboutInfoCard">
            <div className="iconDiv">{icon}</div>
            <div className="titleDiv">
                <h3 className="title">{title}</h3>
            </div>
            <div className="textDiv">
                <p className="text">{text}</p>
            </div>
        </div>
    )
}

export default AboutInfoCard;