import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/include/header';
import Footer from './components/include/footer';

import PostIndex from './containers/post_index';
import PostNew from './containers/post_new';
import PostView from './containers/post_view';
import PostModify from './containers/post_modify';
import PostList from './containers/post_list';
import Guestbook from './containers/guestbook';
import About from './containers/about';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
                <div>
                    <Header/>

                    <Route exact path="/" component={PostIndex}/>
                    <Route exact path="/post/new" component={PostNew}/>
                    <Route path="/post/view/:id" component={PostView}/>
                    <Route path="/post/modify/:id" component={PostModify}/>
                    <Route exact path="/post" component={PostList}/>
                    <Route exact path="/guestbook" component={Guestbook}/>
                    <Route exact path="/about" component={About}/>

                    <Footer/>
                </div>
        </BrowserRouter>

    );
  }
}

export default App;
