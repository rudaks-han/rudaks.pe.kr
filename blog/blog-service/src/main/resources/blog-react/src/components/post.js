import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({id, username, category, createdDate, title, content}) => (
    <div className="post">
        <div className="blog-post">
            <h2 className="blog-post-title"><Link to={`/post/${id}`}>{title}</Link></h2>
            <p className="blog-post-meta">
                {createdDate} by <Link to="#">{username}</Link> | <Link to="#">{category}</Link>
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
