import React from 'react';
//import './ViewPost.css';

const ViewPost = ({post}) => {
    return (
        <div className="col-lg-8">
            <div>
                <h2>{post.title}</h2>
                <p className="blog-post-meta">
                    {post.createdDate} by <a href="#">{post.username}</a> | <a href="#">{post.category}</a>
                </p>
                <div className="post-content">
                    <p dangerouslySetInnerHTML={ {__html: post.content} } />
                </div>

            </div>

        </div>
    );


};

export default ViewPost;
