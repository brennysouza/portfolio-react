import React from "react";
import PropTypes from "prop-types";


//project prop types
Project.propTypes = {
    deployLink: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
};

function Project(props) {
    return (
        <div className="img-card">
            <a href={props.deployed}>
                <img src={props.image} alt={props.alt} />
                <div className="img-text">{props.title}</div>
            </a>
            <a href={props.github}>
            </a>
        </div>
    );
}



export default Project;