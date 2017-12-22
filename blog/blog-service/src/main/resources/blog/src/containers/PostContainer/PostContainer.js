import React, { Component } from 'react';
import { PostWrapper, Navigate, Post, CommentList } from '../../components';

class PostContainer extends Component {
    render() {
        return (
            <PostWrapper>
                <Navigate/>
                <Post/>
                <CommentList/>
            </PostWrapper>
        );
    }
}

export default PostContainer;
