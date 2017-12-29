import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_RECENT_POSTS = 'FETCH_RECENT_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const DELETE_POST = 'DELETE_POST';

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';

const API_URL = 'http://localhost:9999/api/s/';

export function fetchPosts(category) {
    const categoryParam = category ? '&category=' + category : '';
    const request = axios.get(`${API_URL}/posts?offset=0&limit=5${categoryParam}`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function fetchRecentPosts() {
    const request = axios.get(`${API_URL}/posts?offset=0&limit=10`);

    return {
        type: FETCH_RECENT_POSTS,
        payload: request
    };
}

export function fetchPost(id) {
    const request = axios.get(`${API_URL}/posts/${id}`);
    console.error('>>request: ' + request)
    return {
        type: FETCH_POST,
        payload: request
    };
}

export function createPost(props) {
    const request = axios.post(`${API_URL}/posts`, props);

    return {
        type: CREATE_POST,
        payload: request
    };
}

export function updatePost(props) {
    const request = axios.put(`${API_URL}/posts`, props);

    return {
        type: UPDATE_POST,
        payload: request
    };
}

export function deletePost(id) {
    const request = axios.delete(`${API_URL}/posts/${id}`);

    return {
        type: DELETE_POST,
        payload: request
    };
}

export function fetchCategories() {
    const request = axios.get(`${API_URL}/categories`);

    return {
        type: FETCH_CATEGORIES,
        payload: request
    };
}
