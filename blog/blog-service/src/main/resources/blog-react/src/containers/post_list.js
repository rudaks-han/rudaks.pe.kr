import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

import { withRouter } from 'react-router-dom';
//import queryString from 'query-string';
import Post from '../components/post';

import Cookies from 'js-cookie';

class PostList extends Component {
    componentWillMount() {
        //console.error('componentWillMount ' + '['+this.props.match.params.category+']');
        //console.error('this.props.match.params.category ; ' + this.props.match.params.category)
        this.props.fetchPosts(this.props.match.params.category);

        //Cookies.set("a", "1");
        //console.error('>>>> ' + JSON.stringify(Cookies.get()));
        //console.error('____cookie : ' + JSON.stringify(cookies));
    }

    shouldComponentUpdate(nextProps, nextState) {
        //console.error('shouldComponentUpdate');
        return true;
    }


    componentWillUpdate(nextProps, nextState) {
        //this.setState({ loadingEnd: true });
        //console.error('>>>> nextProps : ' + JSON.stringify(nextProps))
        //console.error('nextState : ' + JSON.stringify(nextState))
        //console.error('componentWillUpdate ' + '['+this.props.match.params.category+']');

        return true;
    }

    componentDidMount() {
        //console.error('__componentDidMount');
        //this.setState({loadingEnd: true});
    }

    componentDidUpdate(prevProps, prevState) {
        // 안됨
        //console.error('__componentDidUpdate' );

        if (prevProps.match.url !== this.props.match.url)
        {
            this.props.fetchPosts(this.props.match.params.category);

            //this.setState({loadingEnd: true});
        }
    }

    componentWillReceiveProps(nextProps) {
        //console.error('componentWillReceiveProps');
        //this.setState({ loadingEnd: false });
    }

    renderList() {

        if (!this.props.posts) {
            return (
                <div>No Data</div>
            );
        }

        return this.props.posts.map((post, index) => {
            return (
                <div key={post.id} className="post-wrapper">
                    <Post
                        key={post.id}
                        id={post.id}
                        username={post.username}
                        category={post.categoryName}
                        createdDate={post.createdDate}
                        title={post.title}
                        content={post.content}
                        />
                </div>
            );
        })
    }

    render() {
        //const { loadingEnd } = this.state;

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
