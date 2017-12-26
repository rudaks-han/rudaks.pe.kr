import React, { Component } from 'react';
import * as service from '../../services/post';
import ViewPost from '../../components/ViewPost/ViewPost';

class ViewPostContainer extends Component {
    constructor(props) {
        super();
        this.state = {
            post: {}
        }
    }

    fetchPost = async (id) => {

        const post = await service.getPost(id);

        this.setState({
            post: post.data
        })
    }

    componentDidMount() {
        this.fetchPost(this.props.id);
    }

    render() {
        const {post} = this.state;

        return (
            <ViewPost post={post}/>
        );
    }
}

export default ViewPostContainer;
