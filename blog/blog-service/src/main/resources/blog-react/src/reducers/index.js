import { combineReducers } from 'redux';
import PostsReducers from './reducer_posts';
import RecentPostsReducers from './reducer_recent_posts';
import CategoriesReducers from './reducer_categories';
import { reducer as formReducer } from 'redux-form';
import loginCheckReducer from './reducer_logincheck';

const rootReducer = combineReducers({
    posts: PostsReducers,
    recentPosts: RecentPostsReducers,
    categories: CategoriesReducers,
    form: formReducer,
    loginFlag: loginCheckReducer
});

export default rootReducer;
