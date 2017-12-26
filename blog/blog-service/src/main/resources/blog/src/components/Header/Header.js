import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
    <div className="navbar navbar-default navbar-fixed-top">
			<div className="container">
            <div className="navbar-header">
                <Link to="/" className="navbar-brand">Rudaks.co.kr</Link>
                <button className="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#navbar-main">
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
		              <a className="dropdown-toggle" data-toggle="dropdown" href="#" id="menu-category">Category <span className="caret"></span></a>
		              <ul className="dropdown-menu" aria-labelledby="Category">
		              		<li>
                                <Link to="/post?category=JSP">JSP</Link>
                            </li>

		              </ul>
		            </li>
		            <li>
		              <Link to="/guestbook" id="menu-guestbook">Guestbook</Link>
		            </li>

		            <li>
		              <Link to="/new" id="menu-post-new">New</Link>
		            </li>

	          	</ul>
	          	<form className="navbar-form navbar-left">
                    <input type="text" className="form-control col-lg-8" placeholder="Search" />
                </form>

                <ul className="nav navbar-nav navbar-right">
                	<li><a href="/logout">Logout</a></li>
                </ul>
            </div>
        </div>
	</div>

);

export default Header;
