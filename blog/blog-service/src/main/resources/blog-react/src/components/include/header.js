import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { fetchCategories, fetchRecentPosts, login, logout, checkLogin } from '../../actions';
import {connect} from "react-redux";
import { NavDropdown, MenuItem, Navbar, Nav, NavItem, Button } from 'react-bootstrap';
import Cookies from 'js-cookie';
import { loadProgressBar } from 'axios-progress-bar';

class Header extends Component {
    componentWillMount() {
        this.props.fetchCategories();
        this.props.checkLogin();
    }

    authButton() {
        //const { loginFlag } = this.state;
        console.error('this.props.loginFlag : ' + this.props.loginFlag);
        if (this.props.loginFlag) {
            return <Link to='/' onClick={() => this.props.logout()}>Logout</Link>
        }

        return <Link to='/login'>Login</Link>
    }

    onselectCategory() {

    }

	renderCategoryList() {
        const menuItem = this.props.categories.map((category, index) => {
            return (
                <MenuItem key={index} onClick={() => { this.props.history.push(`/posts/${category.category}`) }}>{category.name}</MenuItem>
            );

        });
        return (
            <NavDropdown eventKey={3} title="Category" id="basic-nav-dropdown">
                {menuItem}
            </NavDropdown>
        );

	}

	render() {
        loadProgressBar();
        return (
            <div className="navbar-fixed-top">

                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/">Rudaks.co.kr</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} onClick={() => { this.props.history.push('/about') }}>
                                About
                            </NavItem>

                            {this.renderCategoryList()}

                            <NavItem eventKey={1} onClick={() => { this.props.history.push('/guestbook') }}>
                                Guestbook
                            </NavItem>

                            <NavItem eventKey={1} onClick={() => { this.props.history.push('/post/new') }}>
                                New
                            </NavItem>
                        </Nav>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#">
                                {this.authButton()}
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </div>
        )
    }
};

function mapStateToProps(state) {
    return {
        categories: state.categories.list,
        loginFlag: state.loginFlag
    };
}

export default withRouter(connect(mapStateToProps, { fetchCategories, checkLogin, login, logout }, null, { pure: false })(Header));
