import axios from "axios";
import PostService from "../API/PostService";

const $authHost = axios.create({
     baseURL: 'https://frontend-test-assignment-api.abz.agency/api/v1/users'

})

const authInterceptor = config => {
    config.headers.token = localStorage.getItem('token')
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $authHost
}
