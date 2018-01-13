import {
        FETCH_POSTS,
        FETCH_POST,
        //UPDATE_POST,
        //DELETE_POST,
        UPLOAD_FILE
    } from '../actions/';
const INITIAL_STATE = { list: [], post: null, category: null, file: null };

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_POST:
            return { ...state, post: action.payload.data };
        case FETCH_POSTS:
            return { ...state, list: action.payload.data };
        case UPLOAD_FILE:
            return { ...state, file: action.payload.data };
        default:
            return state;
    }
}
