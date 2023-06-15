import request from '../utils/request'

export const _getUser = () => {
    return request('/getUser', {
        method: 'get'
    })
}