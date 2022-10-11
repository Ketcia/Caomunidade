import axios from "axios";
const api = axios.create({
    baseURL: "https://backend-caomunidade.herokuapp.com/api",
    headers: {
        Accept: 'application/json',
    }
})
export default api;