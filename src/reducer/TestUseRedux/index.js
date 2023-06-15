import { changeReducer } from '..'

const actionList = [
    'testUseRedux::add',
    'testUseRedux::getMessage',
    'testUseRedux::getBackMessage',
    'testUseRedux::getInfo'
]

const initState = {
    count: 1,
    message: '',
    list: []
}

export default (preState = initState, action = { payload: {} }) => changeReducer(preState, action, actionList)

