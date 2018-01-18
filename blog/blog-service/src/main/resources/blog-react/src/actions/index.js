import axios from 'axios';
import Cookies from 'js-cookie';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_RECENT_POSTS = 'FETCH_RECENT_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const DELETE_POST = 'DELETE_POST';
export const UPLOAD_FILE = 'UPLOAD_FILE';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';

const API_URL = 'http://localhost:9999/api/s';

const axiosConfig = {
    headers: {'Authorization': Cookies.get('uid') ? Cookies.get('uid'): ''}
};

export function fetchPosts(category, offset) {
    const categoryParam = category ? '&category=' + category : '';
    if (!offset) offset = 0;
    const request = axios.get(`${API_URL}/posts?offset=${offset}&limit=5${categoryParam}`, axiosConfig);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function fetchRecentPosts() {
    const request = axios.get(`${API_URL}/posts?offset=0&limit=10`, axiosConfig);

    return {
        type: FETCH_RECENT_POSTS,
        payload: request
    };
}

export function fetchPost(id) {
    const request = axios.get(`${API_URL}/posts/${id}`, axiosConfig);
    return {
        type: FETCH_POST,
        payload: request
    };
}

export function createPost(props) {
    const request = axios.post(`${API_URL}/posts`, props, axiosConfig);

    //console.error('createPost : ' + JSON.stringify(props))
    return {
        type: CREATE_POST,
        payload: request
    };
}

export function updatePost(props) {

    let paramJson = {};
    let nameValueList = [];

    var i=0;
    for (var key in props) {
        let param = {};

        if (props.hasOwnProperty(key)) {
            if (key == 'attachFiles')
                continue;

            param["name"] = key;
            param["value"] = props[key];
            //console.error(key + " -> " + props[key]);
            nameValueList.push(param);
        }

        i++;
    }

    paramJson["nameValues"] = nameValueList;

    //paramJson.push(params);
    //console.error("paramJson > " + JSON.stringify(paramJson));

    const request = axios.put(`${API_URL}/posts/${props.id}`, paramJson, axiosConfig);

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

export function uploadFile(formData) {
    const request = axios.post(`${API_URL}/posts/upload-file`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': Cookies.get('uid') ? Cookies.get('uid'): ''
        }
    });

    //console.error('uploadFile : ' + JSON.stringify(props))
    return {
        type: UPLOAD_FILE,
        payload: request
    };
}

export function fetchCategories() {
    const request = axios.get(`${API_URL}/categories`, axiosConfig);

    return {
        type: FETCH_CATEGORIES,
        payload: request
    };
}

export function login(props) {
    const request = axios.post(`${API_URL}/users/login`, props);

    return {
        type: LOGIN,
        payload: request
    };
}

export function logout() {
    const request = axios.post(`${API_URL}/users/logout`);

    return {
        type: LOGIN,
        payload: request
    };
}
