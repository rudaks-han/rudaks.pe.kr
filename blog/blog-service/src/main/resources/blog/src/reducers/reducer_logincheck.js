import {
    LOGIN_FLAG
    } from '../actions/types';

export default function (state = false, action) {
    switch (action.type) {
        case LOGIN_FLAG:
            return { ...state, flag: action.payload};
        default:
            return state;
    }
}
