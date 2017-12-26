import React, { Component } from 'react';
import { Guestbook } from '../../components';
import * as service from '../../services/post';

class GuestbookContainer extends Component {
    constructor(props) {
        super();
        this.state = {
            offset: 0,
            fetching: false,
            postList: [],
            categoryList: [],
            recentPostList: [],
            warningVisibility: false
        }
    }

    componentDidMount() {
        //this.fetchPostList(0);
        //this.fetchCategoryList();
    }

    render() {

        return (
            <Guestbook />
        );
    }
}

export default GuestbookContainer;
