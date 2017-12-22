import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header, Footer } from './components';
import { PostContainer } from './containers';

class App extends Component {
  render() {
    return (
        <div>
            <Header/>
            <PostContainer/>
            <Footer/>
        </div>
    );
  }
}

export default App;
