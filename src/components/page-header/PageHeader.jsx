import React from 'react';

// Importing the stylesheet for the page header
import './page-header.scss';

// Importing background image from assets
import bg from '../../assets/footer-bg.jpg';

// Functional component PageHeader
const PageHeader = props => {
    return (
        // Rendering a div with page-header class and background image set dynamically
        <div className="page-header" style={{backgroundImage: `url(${bg})`}}>
            {/* Rendering the children passed as props as the heading */}
            <h2>{props.children}</h2>
        </div>
    );
}

// Exporting PageHeader as the default export of this module
export default PageHeader;

