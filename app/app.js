import React from 'react';

// Include the Main React Dependencies
import {render} from 'react-dom';

// Grabs the Routes
import routes from './config/routes';


// Renders the contents according to the route page.
render(routes , document.getElementById("app"));