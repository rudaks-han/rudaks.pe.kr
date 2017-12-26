import React, { Component } from 'react';
import './App.css';
import { Home, About, Post, List, NewPost, Guestbook } from './pages';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <div>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/post/:id" component={Post}/>
            <Route path="/list/:category" component={List}/>
            <Route path="/new" component={NewPost}/>
            <Route path="/guestbook" component={Guestbook}/>
        </div>
    );
  }
}

export default App;
