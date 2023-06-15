export const turnToLoginPage = () => {
    window.location.href = '/login'
}

export const transPathname = (pathname) => {
    return pathname.replaceAll('/', '')
}

export const handleResponse = (res, successCb, errCb) => {
    const { code } = res
    return code === 200 ? (successCb && successCb()) : (errCb && errCb())
}
