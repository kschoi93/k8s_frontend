import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://127.0.0.1:31845/api',
    timeout: 2500
});

instance.interceptors.request.use(request => {
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

instance.interceptors.response.use(response => {
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

export default instance;
