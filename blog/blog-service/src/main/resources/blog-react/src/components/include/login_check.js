import React, { Component } from 'react';
import Cookies from 'js-cookie';


const LoginCheck = () => {
    const uid = Cookies.get('uid');

    if (uid)
    {
        return true;
    }
    else
    {
        return false;
    }
};

export default LoginCheck;