import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Header, Footer } from '../components';
import { PostContainer, NavigatorMenuContainer } from '../containers';

class Home extends Component {
  render() {
    return (
        <div>
            <Header/>

            <div className="container">
                <div className="bs-docs-section">
                	<div className="row">
                        <PostContainer/>
                        <NavigatorMenuContainer/>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    );
  }
}

export default Home;
