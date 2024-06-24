// Importing React to use JSX and define the component
import React from 'react';

// Importing the stylesheet for the Input component
import './input.scss';

// Functional Input component definition
const Input = props => {
    return (
        // Returning an input element with dynamic properties passed via props
        <input
            type={props.type} // Setting the type attribute from props
            placeholder={props.placeholder} // Setting the placeholder attribute from props
            value={props.value} // Setting the value attribute from props
            // Setting the onChange attribute from props, if onChange is provided, 
            // it assigns a function to handle the change event, otherwise assigns null
            onChange={props.onChange ? (e) => props.onChange(e) : null}
        />
    );
}

// Exporting the Input component as the default export
export default Input;
