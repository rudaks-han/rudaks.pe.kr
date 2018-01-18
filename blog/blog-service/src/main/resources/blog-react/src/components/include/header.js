import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {fetchCategories, fetchRecentPosts} from '../../actions';
import {connect} from "react-redux";
import { NavDropdown, MenuItem, Navbar, Nav, NavItem } from 'react-bootstrap';
import LoginCheck from './login_check';
import Cookies from 'js-cookie';
import { loadProgressBar } from 'axios-progress-bar';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loginFlag: 'N'
        }
    }
    componentWillMount() {
        const isLogin = LoginCheck();

        if (isLogin) {
            this.setState({
                loginFlag: 'Y'
            });

        }

        this.props.fetchCategories();
    }

    logout() {
        Cookies.remove("uid");

        this.setState({
            loginFlag: 'N'
        });
    }

    renderLoginLink() {
        const { loginFlag } = this.state;

        if (loginFlag == 'Y') {

            return (
                <li>
                    <Link to="/" onClick={this.logout}>Logout</Link>
                </li>
            )
        }
        else {

            return (
                <li>
                    <Link to="/login">Login</Link>
                </li>
            )
        }
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
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </div>
        )
    }
};

function mapStateToProps(state) {
    return {
        categories: state.categories.list
    };
}

export default withRouter(connect(mapStateToProps, { fetchCategories }, null, { pure: false })(Header));
