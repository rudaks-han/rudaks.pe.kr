import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { fetchCategories, login, checkLogin } from '../../actions';
import {connect} from "react-redux";
import { NavDropdown, MenuItem, Navbar, Nav, NavItem } from 'react-bootstrap';
import { loadProgressBar } from 'axios-progress-bar';
import './nprogress.css'

class Header extends Component {
    componentWillMount() {
        this.props.fetchCategories();
        this.props.checkLogin();
    }

    authButton() {
        if (!this.props.loginFlag.flag) {
            return (
                <Link to='/login'>Login</Link>
            );
        } else {
            return (
                <Link to='/logout'>Logout</Link>
            );
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
                            <NavItem eventKey={1} onClick={() => { alert('준비중입니다.') }}>
                                About
                            </NavItem>

                            {this.renderCategoryList()}

                            <NavItem eventKey={1} onClick={() => { alert('준비중입니다.') }}>
                                Guestbook
                            </NavItem>

                            <NavItem eventKey={1} onClick={() => { this.props.history.push('/post/new') }}>
                                New
                            </NavItem>
                        </Nav>
                        <Navbar.Text pullRight>

                                {this.authButton()}

                        </Navbar.Text>
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

export default withRouter(connect(mapStateToProps, { fetchCategories, checkLogin, login }, null, { pure: false })(Header));
