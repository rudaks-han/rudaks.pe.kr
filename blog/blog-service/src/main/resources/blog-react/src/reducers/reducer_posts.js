import {
        FETCH_POSTS,
        FETCH_NEXT_PAGE_POSTS,
        FETCH_POST,
        UPLOAD_FILE
    } from '../actions/types';

const INITIAL_STATE = { list: [], post: null, category: null, file: null };

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_POST:
            return { ...state, post: action.payload.data, affectedCount: action.payload.data ? 1 : 0 };
        case FETCH_POSTS:
            return { ...state, list: action.payload.data };
        case FETCH_NEXT_PAGE_POSTS:
            console.error('____FETCH_NEXT_PAGE_POSTS : ' + JSON.stringify(action))
            return { ...state, nextPagePosts: action.payload.data };
        case UPLOAD_FILE:
            return { ...state, file: action.payload.data };
        default:
            return state;
    }
}
