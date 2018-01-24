import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, fetchNextPagePosts } from '../actions';
import Warning from '../components/warning/warning';

import { withRouter } from 'react-router-dom';
import Post from '../components/post';
import { Pager } from 'react-bootstrap';
import queryString from 'query-string';
import { CSSTransitionGroup } from 'react-transition-group';

class PostList extends Component {
    constructor(props) {
        super(props);

        const category = this.props.match.params.category;
        const query = queryString.parse(this.props.location.search);
        const offset = query.offset;

        this.state = {
            category: category,
            offset: offset,
            warningVisibility: false,
            warningMessage: null
        };

    }

    componentWillMount() {
        console.error('____ componentWillMount');

        const query = queryString.parse(this.props.location.search);
        const offset = query.offset ? query.offset : 0;
        this.setState({
            offset: offset
        });
        this.goPage(this.props.match.params.category, offset);

        console.error('componentWillMount')
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        return true;
    }

    componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.url !== this.props.match.url)
        {
            console.error('____ componentDidUpdate');

            const query = queryString.parse(this.props.location.search);
            const offset = query.offset ? query.offset : 0;
            this.setState({
                offset: offset,
                category: this.props.match.params.category
            });
            this.goPage(this.props.match.params.category, offset);
        }
    }

    componentWillReceiveProps(nextProps) {
    }

    goPage(category, offset) {
        this.props.fetchPosts(category, offset);
        this.props.fetchNextPagePosts(category, offset);

        let hasNextPost = false;
        if (this.props.nextPosts && this.props.nextPosts.length > 0) {
            hasNextPost = true;
        }

        /*if (this.props.nextPagePost && this.props.nextPagePost.length > 0) {
            this.setState({
                prevDisabled: false
            });
        } else {
            this.setState({
                prevDisabled: true
            });
        }*/
    }

    previousPage() {
        const offset = this.state.offset ? this.state.offset : 0;
        const nextOffset = Number(offset) + 5;
        this.setState({
            offset: nextOffset
        });

        this.goPage(this.state.category, nextOffset);
        this.props.history.push('?offset=' + nextOffset)
    }

    showWarning = (message) => {
        this.setState({
            warningVisibility: true,
            warningMessage: message
        });

        setTimeout(
            () => {
                this.setState({
                    warningVisibility: false,
                    warningMessage: null
                });
            }, 1500
        );
    }

    nextPage() {
        const offset = this.state.offset ? this.state.offset : 0;
        const prevOffset = Number(offset) - 5;

        if (prevOffset < 0) {
            this.showWarning('가장 첫번째 글입니다.');
            return;
        }

        this.setState({
            offset: prevOffset
        });
        //this.props.fetchPosts(this.state.category, prevOffset);
        this.goPage(this.state.category, prevOffset);
        this.props.history.push('?offset=' + prevOffset)
    }

    renderPager() {
        let disablePrev = false;
        let disableNext = false;
        if (this.props.nextPagePosts && this.props.nextPagePosts.length > 0) {
            disablePrev = false;
        } else {
            disablePrev = true;
        }

        const offset = this.state.offset ? this.state.offset : 0;

        if (offset >= 5) {
            disableNext = false;
        } else {
            disableNext = true;
        }

        return (
            <Pager>
                <Pager.Item previous
                            disabled={disablePrev}
                    onClick={this.previousPage.bind(this)}
                            href="#">
                    &larr; Previous Page
                </Pager.Item>
                <Pager.Item next
                            disabled={disableNext}
                     onClick={this.nextPage.bind(this)}
                            href="#">
                    Next Page &rarr;
                </Pager.Item>
            </Pager>
        );
    }

    renderList() {
        const { posts } = this.props;

        if (!posts) {
            return (
                <div>No Data</div>
            );
        }



        return posts.map((post, index) => {
            return (
                <div key={post.id} className="post-wrapper">
                    <Post
                        key={post.id}
                        id={post.id}
                        username={post.username}
                        category={post.categoryName}
                        createdDate={post.formatCreatedDate}
                        title={post.title}
                        content={post.content}
                        />

                    <Warning visible={this.state.warningVisibility} message={this.state.warningMessage}/>
                </div>
            );
        })
    }

    render() {
        //const { loadingEnd } = this.state;

        return (

                <div key={1} className="col-lg-8">
                    {this.renderPager()}

                    <CSSTransitionGroup
                        transitionName="fade"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}>
                        {this.renderList()}
                    </CSSTransitionGroup>

                    {this.renderPager()}
                </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts.list,
        nextPagePosts: state.posts.nextPagePosts
    };
}



export default withRouter(connect(mapStateToProps, { fetchPosts, fetchNextPagePosts }, null, { pure: false })(PostList));
