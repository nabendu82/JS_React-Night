import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-mern-night-backend.herokuapp.com'
})

export default instance;