import React, { Component } from 'react';
import { NewPost } from '../../components';
import * as service from '../../services/post';

class NewPostContainer extends Component {
    constructor(props) {
        super();
        this.state = {
            categoryList: []
        }
    }

    fetchCategoryList = async () => {
        const categoryList = await service.getCategoryList();
        this.setState({
            categoryList: categoryList.data
        });
    }

    componentDidMount() {
        this.fetchCategoryList();
    }

    render() {
        const {categoryList} = this.state;

        return (
            <NewPost categories={categoryList}/>
        );
    }
}

export default NewPostContainer;
