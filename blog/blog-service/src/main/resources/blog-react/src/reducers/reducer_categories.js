import { FETCH_CATEGORIES } from '../actions/';
const INITIAL_STATE = { list: [] };

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_CATEGORIES:
            return { ...state, list: action.payload.data };
        default:
            return state;
    }
}
