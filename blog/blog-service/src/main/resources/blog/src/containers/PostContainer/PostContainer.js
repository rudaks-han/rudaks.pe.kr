import React, { Component } from 'react';
import { PostWrapper, Navigate, Post, PostList, CommentList, Warning } from '../../components';
import * as service from '../../services/post';

class PostContainer extends Component {
    constructor(props) {
        super();
        this.state = {
            offset: 0,
            fetching: false,
            postList: [],
            warningVisibility: false
        }
    }

    fetchPostList = async (offset) => {
        if (offset < 0)
        {
            this.showWarning();
            return;
        }

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

    showWarning = () => {
        this.setState({
            warningVisibility: true
        });

        setTimeout(
            () => {
                this.setState({
                    warningVisibility: false
                });
            }, 1500
        );
    }

    componentDidMount() {
        this.fetchPostList(0);
    }

    render() {
        const {postList, fetching, warningVisibility} = this.state;

        return (
            <PostWrapper>
                <PostList posts={postList}/>
                <CommentList/>
                <Navigate
                    onClick={this.onNavigateClick}
                    disabled={fetching}
                    />
                <Warning visible={warningVisibility} message="가장 첫번째 글입니다."/>
            </PostWrapper>
        );
    }
}

export default PostContainer;
