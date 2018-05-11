import React from 'react';
//import { BrowserRouter as Router, Route } from 'react-router-dom';

//import App from './App';
import { BrowserRouter, Switch } from 'react-router-dom';
import { MainLayoutRoute } from '../layouts/MainLayout';
import { LoginLayoutRoute } from '../layouts/LoginLayout';

import requireLogin from '../containers/require_login';

import PostNew from '../containers/post_new';
import PostView from '../containers/post_view';
import PostModify from '../containers/post_modify';
import PostList from '../containers/post_list';
import Guestbook from '../containers/guestbook';
import About from '../containers/about';
import Login from '../containers/login';
import Logout from '../containers/logout';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <LoginLayoutRoute path="/login" component={Login} />
            <LoginLayoutRoute path="/logout" component={Logout} />

            <MainLayoutRoute exact path="/" component={PostList} />
            <MainLayoutRoute exact path="/posts" component={PostList}/>
            <MainLayoutRoute path="/posts/:category" component={PostList}/>
            <MainLayoutRoute exact path="/post/new" component={requireLogin(PostNew)}/>
            <MainLayoutRoute path="/post/modify/:id" component={requireLogin(PostModify)}/>
            <MainLayoutRoute path="/post/:id" component={PostView}/>
            <MainLayoutRoute path="/guestbook" component={Guestbook}/>
            <MainLayoutRoute path="/about" component={About}/>
        </Switch>
    </BrowserRouter>
)

export default Routes;
