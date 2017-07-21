let React = require("react");

import {BrowserRouter, Route} from 'react-router-dom';

import Main from '../components/Main';
import Search from '../components/children/Search';
import Saved from '../components/children/Saved';
import Results from '../components/children/Result';

module.exports = (
    <BrowserRouter>
        <div>
            <Route path='/' component={Main}/>
            <Route path='/search' component={Search}/>
            <Route path='/saved' component={Saved}/>
            <Route path='/result' component={Results}/>
        </div>
    </BrowserRouter>
);