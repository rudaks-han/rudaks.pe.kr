import React from 'react';
import './Header.css';

const Header = () => (
    <div className="navbar navbar-default navbar-fixed-top">
			<div className="container">
            <div className="navbar-header">
                <a href="/" className="navbar-brand">Rudaks.co.kr</a>
                <button className="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#navbar-main">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
            </div>
            <div className="navbar-collapse collapse" id="navbar-main">
                <ul className="nav navbar-nav">
		            <li>
		              <a href="javascript:;" id="menu-about">About</a>
		            </li>
		            <li className="dropdown">
		              <a className="dropdown-toggle" data-toggle="dropdown" href="#" id="menu-category">Category <span className="caret"></span></a>
		              <ul className="dropdown-menu" aria-labelledby="Category">
		              		<li><a href="/list/jsp">JSP</a></li>

		              </ul>
		            </li>
		            <li>
		              <a href="/guestbook" id="menu-guestbook">Guestbook</a>
		            </li>

		            <li>
		              <a href="/post-new" id="menu-post-new">New</a>
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
