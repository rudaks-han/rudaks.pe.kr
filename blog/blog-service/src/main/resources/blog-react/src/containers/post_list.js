import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

import { Link } from 'react-router-dom';
import queryString from 'query-string';
import Post from '../components/post';

class PostList extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        this.props.fetchPosts(this.props.match.params.category);
        return true;
    }

    componentWillMount() {
        this.props.fetchPosts(this.props.match.params.category);
    }

    renderList() {

        console.error('>>> + ' +this.props.match.url);

        console.error('postlist renderList ');

        return this.props.posts.map((post, index) => {
            return (
                <div>
                    {this.props.match.url}
                <Post
                    key={post.id}
                    id={post.id}
                    username={post.username}
                    category={post.category}
                    createdDate={post.createdDate}
                    title={post.title}
                    content={post.content}
                    />
            </div>
            );
        })
    }

    render() {
        return (
            <div className="col-lg-8">
                {this.renderList()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { posts: state.posts.all };
}

export default connect(mapStateToProps, { fetchPosts })(PostList);
