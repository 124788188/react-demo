export const addNum = payload => {
    return {
        type: 'testUseRedux::add',
        payload
    }
}

export const getMessage = payload => {
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: 'testUseRedux::getMessage',
                payload
            })
        }, 1000)
    }
}

export const getBackMessage = payload => {
    return {
        type: 'testUseRedux::getBackMessage',
        payload
    }
}

export const getInfo = payload => {
    return {
        type: 'testUseRedux::getInfo',
        payload
    }
}