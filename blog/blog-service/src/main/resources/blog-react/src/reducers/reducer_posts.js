import {
        FETCH_POSTS,
        FETCH_POST,
        UPDATE_POST,
        DELETE_POST
    } from '../actions/';
const INITIAL_STATE = { list: [], post: null, category: null };

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_POST:
            return { ...state, post: action.payload.data };
        case FETCH_POSTS:
            return { ...state, list: action.payload.data };
        default:
            return state;
    }
}
