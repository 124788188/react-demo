import { combineReducers } from "redux";

// 自动导入reducer
const createReducers = () => {
    const allJsFiles = require.context('./', true, /\.js/)
    const reducerPaths = allJsFiles.keys().filter(ele => ele.indexOf('/index.js') !== -1 && ele.indexOf('./index.js') !== 0)
    const reducers = {}
    reducerPaths.forEach(ele => {
        const key = ele.replace('./', '').replace('/index.js', '')
        reducers[key] = allJsFiles(ele).default
    })
    return reducers
}

export const changeReducer = (preState, action = { payload: {} }, actionList) => {
    const map = {}
    actionList.forEach(ele => map[ele] = { ...preState, ...action.payload })
    return map[action.type] ? map[action.type] : preState
}

export default combineReducers(createReducers())