import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import Warning from '../components/warning/warning';

import { withRouter } from 'react-router-dom';
import Post from '../components/post';
import { Pager } from 'react-bootstrap';
import queryString from 'query-string';

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
        const query = queryString.parse(this.props.location.search);
        const offset = query.offset ? query.offset : 0;
        this.setState({
            offset: offset
        });
        this.props.fetchPosts(this.props.match.params.category, offset);

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
            const query = queryString.parse(this.props.location.search);
            const offset = query.offset ? query.offset : 0;
            this.setState({
                offset: offset,
                category: this.props.match.params.category
            });
            this.props.fetchPosts(this.props.match.params.category, offset);
            console.error('componentDidUpdate')
        }
    }

    componentWillReceiveProps(nextProps) {
    }

    previousPage() {
        const offset = this.state.offset ? this.state.offset : 0;
        const nextOffset = Number(offset) + 5;
        this.setState({
            offset: nextOffset
        });

        console.error('this.state.category : ' + this.state.category)
        console.error('nextOffset : ' + nextOffset)
        this.props.fetchPosts(this.state.category, nextOffset);
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
        this.props.fetchPosts(this.state.category, prevOffset);
        this.props.history.push('?offset=' + prevOffset)
    }

    renderPager() {
        return (
            <Pager>
                <Pager.Item previous
                    onClick={this.previousPage.bind(this)}
                            href="#">
                    &larr; Previous Page
                </Pager.Item>
                <Pager.Item next
                     onClick={this.nextPage.bind(this)}
                            href="#">
                    Next Page &rarr;
                </Pager.Item>
            </Pager>
        );
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
            <div className="col-lg-8">
                {this.renderPager()}

                {this.renderList()}

                {this.renderPager()}
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
