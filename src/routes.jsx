import React from 'react';
import { Router, IndexRoute, Route } from 'react-router';

import App from './App';

const Routes = (props) => (
    <Router {...props}>
        <Route path="/" component={App} />
    </Router>
);

export default Routes;