import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {fetchCategories, fetchRecentPosts} from '../../actions';
import LoadingBar from 'react-redux-loading-bar'
import {connect} from "react-redux";
import {DropdownButton, MenuItem } from 'react-bootstrap';

class Header extends Component {
    componentWillMount() {
        this.props.fetchCategories();
    }

    onselectCategory() {

    }

	renderCategoryList() {
        return (
            <ul className="dropdown-menu" id="dropdown">
                <li><a href="#books">Books</a></li>
                <li><a href="#podcasts">Podcasts</a></li>
                <li><a href="#">Tech I Like</a></li>
                <li><a href="#">About me</a></li>
                <li><a href="#addBlog">Add a Blog</a></li>
            </ul>
        );

	}

	render() {
        return (
            <div className="navbar navbar-default navbar-fixed-top">
                <LoadingBar/>

                <div className="container">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand">Rudaks.co.kr</Link>
                        <button className="navbar-toggle collapsed" type="button" data-toggle="collapse"
                                data-target="#navbar-main">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div className="navbar-collapse collapse" id="navbar-main">
                        <ul className="nav navbar-nav">
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" id="menu-category">Category <span
                                    className="caret"></span></a>

									{this.renderCategoryList()}


                            </li>
                            <li>
                                <Link to="/guestbook" id="menu-guestbook">Guestbook</Link>
                            </li>

                            <li>
                                <Link to="/post/new" id="menu-post-new">New</Link>
                            </li>

                        </ul>
                        <form className="navbar-form navbar-left">
                            <input type="text" className="form-control col-lg-8" placeholder="Search"/>
                        </form>

                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="/logout">Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
};

function mapStateToProps(state) {
    return {
        categories: state.categories.list
    };
}

export default connect(mapStateToProps, { fetchCategories }, null, { pure: false })(Header);
