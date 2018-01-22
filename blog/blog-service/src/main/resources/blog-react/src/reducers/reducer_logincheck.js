import {
    LOGIN_FLAG
    } from '../actions/';

export default function (state = false, action) {
    //console.error('reducer_logincheck : ' + action.type + '> ' + action.payload)
    switch (action.type) {
        case LOGIN_FLAG:
            return action.payload;
    }

    return state;
}
