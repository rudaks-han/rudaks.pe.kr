import React, { Component } from 'react';
import { PostWrapper, Navigate, Post, PostList, CommentList } from '../../components';
import * as service from '../../services/post';

class PostContainer extends Component {
    constructor(props) {
        super();
        this.state = {
            offset: 0,
            fetching: false,
            postList: []
        }
    }

    fetchPostList = async (offset) => {
        this.setState({
            fetching: true
        })
        const postList = await service.getPostList(offset);
        console.error('postList : ' + JSON.stringify(postList));

        this.setState({
            offset: offset,
            postList: postList.data,
            fetching: false
        })
    }

    onNavigateClick = (type) => {
        const offset = this.state.offset;

        if (type === 'PREV')
        {
            this.fetchPostList(offset+5);
        }
        else
        {
            this.fetchPostList(offset-5);
        }
    }

    componentDidMount() {
        this.fetchPostList(0);
    }

    render() {
        const {postList} = this.state;

        return (
            <PostWrapper>
                <PostList posts={postList}/>
                <CommentList/>
                <Navigate
                    onClick={this.onNavigateClick}
                    />
            </PostWrapper>
        );
    }
}

export default PostContainer;
