import React from 'react';
import { Route } from 'react-router-dom';

const LoginLayout = ({children, ...rest}) => {
  return (
    <div>
        {children}
    </div>
  )
};

const LoginLayoutRoute = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <LoginLayout>
          <Component {...matchProps} />
      </LoginLayout>
    )} />
  )
};

export { LoginLayout, LoginLayoutRoute };
