import {
        FETCH_RECENT_POSTS
    } from '../actions/';
const INITIAL_STATE = { list: [] };

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_RECENT_POSTS:
            return { ...state, list: action.payload.data };
        default:
            return state;
    }
}
