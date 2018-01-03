import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

import { withRouter, Link } from 'react-router-dom';
import queryString from 'query-string';
import Post from '../components/post';

class PostList extends Component {


    componentWillMount() {
        console.error('componentWillMount ' + '['+this.props.match.params.category+']');
        this.props.fetchPosts(this.props.match.params.category);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.error('shouldComponentUpdate');
        return true;
    }


    componentWillUpdate(nextProps, nextState) {
        console.error('componentWillUpdate ' + '['+this.props.match.params.category+']');
        return true;
    }

    componentDidMount() {
        console.error('__componentDidMount');
    }

    componentDidUpdate(prevProps, prevState) {
        console.error('__componentDidUpdate' );

        if (prevProps.match.url !== this.props.match.url)
        {
            this.props.fetchPosts(this.props.match.params.category);
        }


    }

    componentWillReceiveProps(nextProps) {
        console.error('componentWillReceiveProps');
    }


    renderList() {

        console.error('renderList');
        //console.error('this.props ' + JSON.stringify(this.props));


        //this.props.posts.map((post, index) => {
            //console.error(post.title)
        //});

        if (!this.props.posts) {
            return (
                <div>No Data</div>
            );
        }

        console.error('postlist renderList ' + this.props.posts.length );

        return this.props.posts.map((post, index) => {
            return (
                <div key={post.id}>
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
    return {
        posts: state.posts.list
    };
}

export default withRouter(connect(mapStateToProps, { fetchPosts }, null, { pure: false })(PostList));
