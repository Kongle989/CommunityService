import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Main from '../components/Main';

module.exports = (
    <BrowserRouter>
            <Route path='/' component={Main}/>
    </BrowserRouter>
);