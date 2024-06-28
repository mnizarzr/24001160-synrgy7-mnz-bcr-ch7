import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3000/api'
});

instance.interceptors.request.use((config) => {
    const userToken = localStorage.getItem('user_token')
    config.headers.Authorization = `Bearer ${userToken}`
    return config
})

export default instance
