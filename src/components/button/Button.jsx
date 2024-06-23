// I import React to use its functionality for creating components
import React from 'react';

// I import PropTypes to enforce type checking for my component's props
import PropTypes from 'prop-types';

// I import the stylesheet for the button component
import './button.scss';

// I create a Button component using a functional component
const Button = props => {
    return (
        // I return a button element with dynamic class names and click handler
        <button
            // I dynamically set the button's class name using props.className
            className={`btn ${props.className}`}
            // I set the onClick handler to call props.onClick if it's provided
            onClick={props.onClick ? () => props.onClick() : null}
        >
            // I render any child elements passed to this component
            {props.children}
        </button>
    );
}

// I create an OutlineButton component that uses the Button component
export const OutlineButton = props => {
    return (
        // I return a Button component with an outline style and dynamic class names and click handler
        <Button
            // I add an additional class name for outline styling
            className={`btn-outline ${props.className}`}
            // I set the onClick handler to call props.onClick if it's provided
            onClick={props.onClick ? () => props.onClick() : null}
        >
            // I render any child elements passed to this component
            {props.children}
        </Button>
    );
}

// I define prop types for the Button component to enforce that onClick, if provided, is a function
Button.propTypes = {
    onClick: PropTypes.func
}

// I export the Button component as the default export of this module
export default Button;