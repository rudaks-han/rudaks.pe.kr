import React from 'react';
import './Post.css';

const Post = ({id, username, category, createdDate, title, content}) => (
    <div className="Post">
        <div className="blog-post">
            <h2 className="blog-post-title"><a href="/post/{id}">{title}</a></h2>
            <p className="blog-post-meta">
                {createdDate} by <a href="#">{username}</a> | <a href="#">{category}</a>
            </p>
            <div className="post-content">
                <p dangerouslySetInnerHTML={ {__html: content} } />
            </div>
        </div>

        <div className="btn-addthis">
            <span><a href="/post/{id}#disqus_thread" data-disqus-identifier="post_{id}">comment</a></span>
        </div>
    </div>
);

export default Post;
