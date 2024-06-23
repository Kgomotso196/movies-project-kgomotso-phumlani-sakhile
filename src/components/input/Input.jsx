// I import React to use its functionality for creating components
import React from 'react';

// I import the stylesheet for the input component
import './input.scss';

// I create the Input component using a functional component
const Input = props => {
    return (
        // I render an input element with props passed to it
        <input
            type={props.type} // I set the input type from props
            placeholder={props.placeholder} // I set the input placeholder from props
            value={props.value} // I set the input value from props
            onChange={props.onChange ? (e) => props.onChange(e) : null} // I set the onChange handler if provided in props
        />
    );
}

// I export the Input component as the default export of this module
export default Input;