import React from 'react';
import { Link } from 'react-router-dom';

const navCategoryList = ({categories}) => {
    //console.error(JSON.stringify(categories))
    const categoryList = categories.map((category, index) => (
        <Link key={index} to={`/list/${category.category}`} className="list-group-item">{category.name}</Link>
    ));

    return (
        <div className="list-group">
    		<div className="list-group-item active">Category</div>
            {categoryList}
    	</div>
    );
};

export default navCategoryList;
