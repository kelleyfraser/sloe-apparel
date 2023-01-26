import React from 'react';

// Custom component to render a button html element supplying event handler and label through props
// I created this component to clean up other parts of my code to avoid code duplication
function Button(props) {
  return <button onClick={props.handleClick} className="btn btn-purple">{props.label}</button>
}

export default Button;