import { combineReducers } from 'redux';
import PostsReducers from './reducer_posts';
import CategoriesReducers from './reducer_categories';
//import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    posts: PostsReducers,
    categories: CategoriesReducers
    //form: formReducer
});

export default rootReducer;
