import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories, fetchRecentPosts } from '../actions';

import { Link } from 'react-router-dom';
import AdSense from 'react-adsense';

class NavigatorMenu extends Component {

    componentWillMount() {
        this.props.fetchCategories('Y');
        this.props.fetchRecentPosts();
    }

    renderCategoryList() {
        return this.props.categories.map((category) => {
            return (
                <Link
                    key={category.id}
                    to={`/posts/${category.category}`}
                    className="list-group-item">{category.name} ({category.postCount})
                </Link>
            );
        });
    }

    renderRecentPostList() {
        //console.error('this.props.recentPosts : ' + this.props.recentPosts)
        return this.props.recentPosts.map((post) => {
            return (
                <li key={post.id} className="ellipsis">
                    <Link
                        to={`/post/${post.id}`}>
                        {post.title}
                    </Link>
                </li>
            )
        })

    }

    render() {
        return (
            <div className="col-lg-4">
                <div className="list-group">

            		<div className="list-group-item active">Category</div>

                    {this.renderCategoryList()}
            	</div>

                <div className="panel panel-success">
            		<div className="panel-heading">
            			<h3 className="panel-title">Recent posts</h3>
            		</div>

            		<div className="panel-body">

            			<ol className="list-unstyled">
                            {this.renderRecentPostList()}
            			</ol>

            		</div>
            	</div>

                <div className="adsense-div">
                    <AdSense.Google
                        client='ca-pub-3145895421510547'
                        slot='2746943264' />
                </div>
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {
        categories: state.categories.list,
        recentPosts: state.recentPosts.list
    };
}

export default connect(mapStateToProps, { fetchCategories, fetchRecentPosts }, null, { pure: false })(NavigatorMenu);
