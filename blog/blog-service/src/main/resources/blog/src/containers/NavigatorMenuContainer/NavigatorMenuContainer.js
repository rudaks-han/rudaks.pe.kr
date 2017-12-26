import React, { Component } from 'react';
import { NavWrapper, NavCategoryList, NavRecentPost } from '../../components';
import * as service from '../../services/post';

class NavigatorMenuContainer extends Component {
    constructor(props) {
        super();
        this.state = {
            categoryList: [],
            recentPostList: []
        }
    }

    fetchCategoryList = async () => {
        const categoryList = await service.getCategoryList();
        this.setState({
            categoryList: categoryList.data
        });
    }

    fetchRecentPostList = async (offset) => {
        const recentPostList = await service.getPostList(offset, 10);

        this.setState({
            recentPostList: recentPostList.data
        });
    }

    componentDidMount() {
        this.fetchCategoryList();
        this.fetchRecentPostList(0);
    }

    render() {
        const {categoryList, recentPostList} = this.state;

        return (
            <NavWrapper>
                <NavCategoryList categories={categoryList}/>
                <NavRecentPost posts={recentPostList}/>
            </NavWrapper>
        );
    }
}

export default NavigatorMenuContainer;
