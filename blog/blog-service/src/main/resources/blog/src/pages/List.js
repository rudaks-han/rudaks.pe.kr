import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Header, Footer } from '../components';
import { PostContainer, NavigatorMenuContainer } from '../containers';

class List extends Component {
  render() {
      const category = this.props.match.params.category;

      console.error('List category : ' + category)

      return (
          <div>
            <Header/>

            <div className="container">
                <div className="bs-docs-section">
                	<div className="row">
                        <PostContainer category={category}/>
                        <NavigatorMenuContainer/>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    );
  }
}

export default List;
