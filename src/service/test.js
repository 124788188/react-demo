import request from '../utils/request'

export const _getInfo = () => {
    return request('/getInfo', {
        method: 'get'
    })
}

export const _getInfoNull = () => {
    return request('/getInfoNull', {
        method: 'get'
    })
}
