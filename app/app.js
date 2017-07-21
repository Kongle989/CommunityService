let React = require("react");

// Include the Main React Dependencies
import {render} from 'react-dom';

// Grabs the Routes
let routes = require("./config/routes");

// Renders the contents according to the route page.
render(routes , document.getElementById("app"));