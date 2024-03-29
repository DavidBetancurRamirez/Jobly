import axios from "axios"

const BASE_URL = 'https://6605b8abd92166b2e3c2a918.mockapi.io/'

export default axios.create({
    baseURL: BASE_URL,
    headers: { "Content-Type": "application/json" }
});

export const axiosPrivate =  axios.create({
    baseURL: BASE_URL,
    headers: { "Content-Type": "application/json" },
    withCredentials: true
});
