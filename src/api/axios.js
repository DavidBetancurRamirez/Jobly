import axios from "axios"

export const BASE_URL = {
    register: 'http://localhost:8081/API/Register/',
    user: 'http://localhost:8082/API/User/'
}

export const axiosPrivate =  axios.create({
    headers: { "Content-Type": "application/json" },
    withCredentials: true
});
