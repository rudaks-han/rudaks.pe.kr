import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchPost, deletePost, checkLogin} from '../actions';

import Post from '../components/post';
import Warning from '../components/warning/warning';
import PostActionButtons from '../components/post_action_buttons';
// import ReactDisqusComments from 'react-disqus-comments';
import { CSSTransitionGroup } from 'react-transition-group';


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
        this.setState({
            actionButtonVisibility: this.props.loginFlag
        });

        window.scrollTo(0, 0);
    }

    componentWillMount() {
        this.props.checkLogin();

        this.setState({
            fetching: true,
            actionButtonVisibility: this.props.loginFlag
        });


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
        //console.error('this.props : ' + JSON.stringify(this.props))
        const { post, affectedCount } = this.props;
        const { warningVisibility, actionButtonVisibility } = this.state;

        if (affectedCount === undefined || !post) {
            return (
                <div>Loading...</div>
                );
        }

        if (affectedCount === 0) {
            return <Warning visible={true} message="해당 포스트가 존재하지 않습니다."/>;
        }

        return (
            <div key={1} className="post-wrapper">
                    <Post
                        key={post.id}
                        id={post.id}
                        username={post.username}
                        category={post.category}
                        categoryName={post.categoryName}
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
                    {/*<ReactDisqusComments
                        shortname="rudakscokr"
                        identifier={post.id}
                        title={post.title}
                        url={`http://rudaks.pe.kr/post/${post.id}`}
                        category_id={post.category} />*/}

                </div>



            </div>
        );
    }

    render() {
        return (
            <div className="col-lg-8">
                <CSSTransitionGroup
                    transitionName="fade"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                {this.renderView()}
                </CSSTransitionGroup>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        post: state.posts.post,
        affectedCount: state.posts.affectedCount,
        loginFlag: state.loginFlag
    };
}

export default connect(mapStateToProps, { checkLogin, fetchPost, deletePost })(PostView);
