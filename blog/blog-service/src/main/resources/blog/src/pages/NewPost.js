import React from 'react';

import { Header, Footer } from '../components';
import { NewPostContainer, NavigatorMenuContainer } from '../containers';

const NewPost = () => {
    return (
        <div>
            <Header/>

            <div className="container">
                <div className="bs-docs-section">
                	<div className="row">
                        <NewPostContainer/>
                        <NavigatorMenuContainer/>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    );
};

export default NewPost;
