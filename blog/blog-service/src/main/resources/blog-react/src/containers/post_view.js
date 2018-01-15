import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';

import { Link } from 'react-router-dom';
import Post from '../components/post';
import Warning from '../components/warning/warning';
import PostActionButtons from '../components/post_action_buttons';
import ReactDisqusComments from 'react-disqus-comments';
import LoginCheck from "../components/include/login_check";


class PostView extends Component {
    constructor(props) {
        super();
        this.state = {
            fetching: false, // 요청중인지
            warningVisibility: false,
            actionButtonVisibility: false
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.url !== this.props.match.url)
        {
            this.props.fetchPost(this.props.match.params.id);

            window.scrollTo(0, 0);
        }
    }

    componentDidMount() {
        const isLogin = LoginCheck();

        //console.error('isLogin : ' + isLogin)
        //if (isLogin) {
        this.setState({
            actionButtonVisibility: isLogin
        });

        //console.error('11__actionButtonVisibility : ' + JSON.stringify(this.state))
        //}


        window.scrollTo(0, 0);
    }

    componentWillMount() {
        const isLogin = LoginCheck();


        this.setState({
            fetching: true,
            actionButtonVisibility: isLogin
        });

        //console.error('__actionButtonVisibility : ' + JSON.stringify(this.state))

        this.props.fetchPost(this.props.match.params.id);

        this.setState({
            fetching: false
        });
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

    onConfirm() {
        // Preform your action.
    }

    renderView() {
        const { post } = this.props;
        const { fetching, warningVisibility, actionButtonVisibility } = this.state;

        //console.error("post : " + JSON.stringify(post));

        if (!post) {
            return (
                <div>Loading...</div>
                );
        }

        return (
            <div className="post-wrapper">
                <Post
                    key={post.id}
                    id={post.id}
                    username={post.username}
                    category={post.categoryName}
                    createdDate={post.formatCreatedDate}
                    title={post.title}
                    content={post.content}
                    />
                <Warning visible={warningVisibility} message="해당 포스트가 존재하지 않습니다."/>

                <PostActionButtons
                    postId={post.id}
                    actionButtonVisibility={actionButtonVisibility}
                    onDeleteClick={() => {
                    this.props.deletePost(post.id)
                        .then(() => {
                            this.props.history.push("/")
                        });
                }} />


                <div>
                    <ReactDisqusComments
                        shortname="rudakscokr"
                        identifier={post.id}
                        title={post.title}
                        url={`http://rudaks.pe.kr/post/${post.id}`}
                        category_id="{post.categoryName"/>
                </div>

            </div>
        );
    }

    render() {
        return (
            <div className="col-lg-8">
                {this.renderView()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        post: state.posts.post
    };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostView);
