import React from 'react';
import queryString from 'query-string';
import { Header, Footer } from '../components';
import { ViewPostContainer, NavigatorMenuContainer } from '../containers';

const Post = ({location, match}) => {
    const query = queryString.parse(location.search);
    const id = match.params.id;

    return (
        <div>
            <Header/>

            <div className="container">
                <div className="bs-docs-section">
                	<div className="row">
                        <ViewPostContainer id={id}/>
                        <NavigatorMenuContainer/>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    );
};

export default Post;
