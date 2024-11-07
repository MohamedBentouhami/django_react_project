import axious from "axios"
import { ACCES_TOKEN } from "./constants"

const api = axious.create({
    baseURL: import.meta.env.VITE_API_URL
})

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(ACCES_TOKEN)
        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }

        return config
    }, (error) =>{
        return Promise.reject(error)
    }
)

export default api