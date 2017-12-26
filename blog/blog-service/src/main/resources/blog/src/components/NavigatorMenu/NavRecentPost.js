import React from 'react';
import { Link } from 'react-router-dom';

const NavRecentPost = ({posts}) => {
    console.error(posts);
    const postList = posts.map((post, index) => (
        <li key={index} className="ellipsis">
            <Link to={`/post/${post.id}`}>{post.title}</Link>
        </li>
    ));

    return (
        <div className="panel panel-success">
    		<div className="panel-heading">
    			<h3 className="panel-title">Recent posts</h3>
    		</div>

    		<div className="panel-body">

    			<ol className="list-unstyled">
    				{postList}
    			</ol>

    		</div>
    	</div>
    );

};

export default NavRecentPost;
