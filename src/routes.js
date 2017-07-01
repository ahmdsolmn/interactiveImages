import App from './components/App';
import ImageContainer from './containers/ImageContainer';
import React from 'react';
import { Route } from 'react-router';

export default (
    <Route path='/' component={App}>
        <Route path='/:imageId' component={ImageContainer}>
        </Route>
    </Route>
)