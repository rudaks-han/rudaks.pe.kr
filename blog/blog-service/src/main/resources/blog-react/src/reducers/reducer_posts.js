import {
        FETCH_POSTS,
        FETCH_RECENT_POSTS,
        FETCH_POST,
        UPDATE_POST,
        DELETE_POST
    } from '../actions/';
const INITIAL_STATE = { all: [], recent_posts: [], post: null };

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_POST:
            return { ...state, post: action.payload.data };
        case FETCH_POSTS:
            return { ...state, all: action.payload.data };
        case FETCH_RECENT_POSTS:
            return { ...state, recent_posts: action.payload.data };
        default:
            return state;
    }
}
