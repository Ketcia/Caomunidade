import axios from "axios";
const api = axios.create({
    baseURL: "https://backendcaomunidade.up.railway.app/api",
    headers: {
        Accept: 'application/json',
    }
})
export default api;