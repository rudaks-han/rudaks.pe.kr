import axios from 'axios';

const server_url = 'http://localhost:9999';

export function getPostList(offset, limit, category) {
    category = typeof category === 'undefined'? '': category;
    return axios.get(`${server_url}/api/s/posts?offset=${offset}&limit=${limit}&category=${category}`);
}

export function getCategoryList() {
    return axios.get(`${server_url}/api/s/categories`);
}

export function getPost(id) {
    return axios.get(`${server_url}/api/s/posts/${id}`);
}
