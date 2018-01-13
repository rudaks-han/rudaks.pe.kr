import { combineReducers } from 'redux';
import PostsReducers from './reducer_posts';
import RecentPostsReducers from './reducer_recent_posts';
import CategoriesReducers from './reducer_categories';
import { reducer as formReducer } from 'redux-form';
import { loadingBarReducer } from 'react-redux-loading-bar'

const rootReducer = combineReducers({
    posts: PostsReducers,
    recentPosts: RecentPostsReducers,
    categories: CategoriesReducers,
    form: formReducer,
    loadingBar: loadingBarReducer
});

export default rootReducer;
