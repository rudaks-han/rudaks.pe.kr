import React from 'react';
//import './PostWrapper.css';

const PostWrapper = ({children}) => (

    <div className="container">
        <div className="bs-docs-section">
        	<div className="row">
	           {children}
            </div>
        </div>
    </div>
);

export default PostWrapper;
