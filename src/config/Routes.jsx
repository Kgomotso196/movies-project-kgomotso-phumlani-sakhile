import React from 'react';

// Importing Route and Switch components from react-router-dom
import { Route, Switch } from 'react-router-dom';

// Importing components for different pages
import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/detail/Detail';

// Define the Routes component
const Routes = () => {
    return (
        <Switch>
            {/* Route for search results in a specific category */}
            <Route
                path='/:category/search/:keyword'
                component={Catalog}
            />
            {/* Route for detail view of a specific item */}
            <Route
                path='/:category/:id'
                component={Detail}
            />
            {/* Route for a catalog view of a specific category */}
            <Route
                path='/:category'
                component={Catalog}
            />
            {/* Route for the home page */}
            <Route
                path='/'
                exact
                component={Home}
            />
        </Switch>
    );
}

// Export the Routes component as the default export
export default Routes;
