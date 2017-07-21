let React = require("react");

import {BrowserRouter, Route} from 'react-router-dom';

import Main from '../components/Main';
import Loginsignup from '../components/children/LoginSignup';
import Posts from '../components/children/Posts'
import Profile from '../components/children/Profile'

module.exports = (
    <BrowserRouter>
        <div>
            <Route path='/' component={Main}/>
            <Route path='/login' component={Loginsignup}/>
            <Route path='/posts' component={Posts}/>
            <Route path='/profile' component={Profile}/>
        </div>
    </BrowserRouter>
);