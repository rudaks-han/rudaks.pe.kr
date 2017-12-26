import React from 'react';
import { Header, Footer } from '../components';
import { GuestbookContainer } from '../containers';

const Guestbook = () => {
    return (
        <div>
            <Header/>
            <GuestbookContainer/>
            <Footer/>
        </div>
    );
};

export default Guestbook;
