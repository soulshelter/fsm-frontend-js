import axios from 'axios';


const reqresApi = axios.create({
    baseURL: 'http://localhost:4000/',
    timeout: 5000
})

export function getAuthentication() {
    return reqresApi.get(`auth`);
}