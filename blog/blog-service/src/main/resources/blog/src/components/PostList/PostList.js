import React from 'react';
import Post from '../Post/Post'
import './PostList.css';

const PostList = ({posts}) => {
    const postList = posts.map(
        (post, index) => (
            <Post
                id={post.id}
                username={post.username}
                category={post.category}
                createdDate={post.createdDate}
                title={post.title}
                content={post.content}
                key={index}
                />

        )
    );

    return (
        <ul className="PostList">
            {postList}
        </ul>
    );


};

export default PostList;
