import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';

import { Link } from 'react-router-dom';
import Post from '../components/post';
import Warning from '../components/warning/warning';
import Confirm from 'react-confirm-bootstrap';

class PostView extends Component {
    constructor(props) {
        super();
        this.state = {
            fetching: false, // 요청중인지
            warningVisibility: false
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    componentWillMount() {

        this.setState({
            fetching: true
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

    onDeleteClick(id) {
        const history =
        console.error('id  : ' + id)
        this.props.deletePost(id)
            .then(() => {
                this.props.history.push("/")
            });
    }

    onConfirm() {
        // Preform your action.
    }

    renderView() {
        const { post } = this.props;
        const { fetching, warningVisibility } = this.state;

        console.error("post : " + JSON.stringify(post));

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

                    <div style={{float:'right'}}>
						<Link to={`/post/modify/${post.id}`} className="btn btn-primary">수정</Link>&nbsp;

                        <Confirm
                            onConfirm={() => {this.onDeleteClick(post.id)}}
                            body="이 게시물을 삭제하시겠습니까?"
                            confirmText="Confirm Delete"
                            title="게시물 삭제">
                            <button className="btn btn-primary">삭제</button>
                        </Confirm>
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
