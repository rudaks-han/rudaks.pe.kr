import axios from 'axios';

const server_url = 'http://localhost:9999';

export function getRecentPostList() {
    return axios.get(`${server_url}/api/s/posts?offset=0`);
}
