import axios from 'axios';

const server_url = 'http://localhost:9999';

export function getPostList(offset) {
    return axios.get(`${server_url}/api/s/posts?offset=${offset}`);
}
