import React from "react";
import PropTypes from "prop-types";

function Project(props) {
    return (
      <div className="img-card">
        <a href={props.deployLink}>
          <img src={props.image} alt={props.name} />
          <div className="img-text">{props.name}</div>
        </a>
        <a href={props.github}>GitHub Repository</a>
      </div>
    );
  }
  
  Project.propTypes = {
    deployLink: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
  };
  
  export default Project;

// Might add alt to propTypes
//     alt: PropTypes.string.isRequired,


// Original idea for function, use if above doesn't work
// function Project(props) {
//     return (
//         <div className="img-card">
//             <a href={props.deployed}>
//                 <img src={props.image} alt={props.alt} />
//                 <div className="img-text">{props.title}</div>
//             </a>
//             <a href={props.github}>
//             </a>
//         </div>
//     );
// }



