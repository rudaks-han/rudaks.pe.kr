import React, { Component } from 'react';
import { PostWrapper, Navigate, Post, PostList, CommentList } from '../../components';
import * as service from '../../services/post';

class PostContainer extends Component {
    constructor(props) {
        super();
        this.state = {
            fetching: false,
            postList: []
        }
    }

    fetchPostList = async () => {
        this.setState({
            fetching: true
        })
        const postList = await service.getRecentPostList();
        console.error('postList : ' + JSON.stringify(postList));

        this.setState({
            postList: postList.data,
            fetching: false
        })
    }

    componentDidMount() {
        this.fetchPostList();
    }

    render() {
        const {postList} = this.state;

        return (
            <PostWrapper>
                <PostList posts={postList}/>
                <CommentList/>
                <Navigate/>
            </PostWrapper>
        );
    }
}

export default PostContainer;
