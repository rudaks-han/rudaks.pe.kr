import React, { Component } from 'react';

import { Route } from 'react-router-dom';
import Header from '../components/include/header';
import Footer from '../components/include/footer';
import NavigatorMenu from '../containers/navigator_menu';

const MainLayout = ({children, ...rest}) => {
    return (
        <div>
            <Header/>

            <div className="container">
                <div className="bs-docs-section">
                	<div className="row">
                        {children}

                        <NavigatorMenu />
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    );
};

const MainLayoutRoute = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <MainLayout>
          <Component {...matchProps} />
      </MainLayout>
    )} />
  )
};

export { MainLayout, MainLayoutRoute };
