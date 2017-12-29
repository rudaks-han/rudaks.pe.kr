import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//import App from './App';
import PostIndex from './containers/PostIndex';
import PostNew from './containers/PostNew';

export default (
    <Router>
        <Route exact path="/" component={PostIndex}/>
        <Route path="/post/new" component={PostNew}/>
    </Router>
);
