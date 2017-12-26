import React, { Component } from 'react';
import { PostWrapper, Navigate, Post, PostList, CommentList, Warning } from '../../components';
import * as service from '../../services/post';

class PostContainer extends Component {
    constructor(props) {
        super();
        this.state = {
            category: props.category,
            offset: 0,
            fetching: false,
            postList: [],
            categoryList: [],
            recentPostList: [],
            warningVisibility: false
        }


        // if (typeof this.props !== 'undefined')
        // {
        //     this.setState({
        //         category: this.props.category
        //     });
        // }
    }

    fetchPostList = async (offset, category) => {

        if (offset < 0)
        {
            this.showWarning();
            return;
        }

        this.setState({
            fetching: true,
            category: category
        });

        const postList = await service.getPostList(offset, 5, category);

        this.setState({
            offset: offset,
            postList: postList.data,
            fetching: false
        })
    }

    fetchCategoryList = async () => {
        const categoryList = await service.getCategoryList();
        this.setState({
            categoryList: categoryList.data
        });
    }

    fetchRecentPostList = async (offset) => {
        const recentPostList = await service.getPostList(offset, 10);

        this.setState({
            recentPostList: recentPostList.data
        });
    }

    onNavigateClick = (type) => {
        const offset = this.state.offset;
        const category = this.state.category;

        if (type === 'PREV')
        {
            this.fetchPostList(offset+5, category);
        }
        else
        {
            this.fetchPostList(offset-5, category);
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
        this.fetchPostList(0, this.props.category);
        this.fetchCategoryList();
    }

    render() {
        if (this.state.category != this.props.category)
        {
            this.setState({
                category: this.props.category
            });

            this.fetchPostList(0, this.props.category);
        }

        const {category, postList, fetching, warningVisibility} = this.state;

        return (
            <PostWrapper>
                <Navigate
                    onClick={this.onNavigateClick}
                    disabled={fetching}
                    />
                <PostList posts={postList}/>
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
