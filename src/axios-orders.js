import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://myburger-78410.firebaseio.com/'
});

export default instance;