import axios from 'axios'
import { defaultBaseUrl } from '../settings'
import { turnToLoginPage } from './common'

const baseURL = defaultBaseUrl
const service = axios.create({
    baseURL
})

service.interceptors.request.use(
    config => {
        if (!localStorage.getItem('user') && config.url !== '/getUser') {
            return turnToLoginPage()
        }
        const token = localStorage.getItem('token')
        if (token) {
            config.headers['Authorization'] = 'JWT ' + token
        }
        return config
    },
    error => {
        return Promise.reject()
    }
)

service.interceptors.response.use(
    response => {
        if (response.data.code === 200) {
            return response.data
        } else {
            turnToLoginPage()
            Promise.reject()
        }
    },
    error => {
        return Promise.reject()
    }
)

export default service
