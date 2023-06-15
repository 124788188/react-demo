import { Button, Table } from 'antd';
import { _getInfoNull } from "../../service/test"
import { _getInfo } from "../../service/test";
import { connect } from "react-redux";
import { addNum, getMessage, getBackMessage, getInfo } from '../../action/testUseRedux';
import { handleResponse } from '../../utils/common'

const mapStoreStateToProps = state => ({
    ...state.TestUseRedux //state.XXX XXX与@/reducer中的文件夹名一致
})

const mapDispatches = dispatch => ({
    addNum: val => dispatch(addNum(val)),
    getMessage: () => dispatch(getMessage({ message: 'MESSAGE' })),
    getBackMessage: val => dispatch(getBackMessage(val)),
    getInfo: val => dispatch(getInfo(val)),// 上述都是通过action改变reducer
    getInfoWithoutAction: val => dispatch({ type: 'testUseRedux::getMessage', payload: { list: val } }) // 不通过action改变reducer
})

const Index = props => {
    const getInfo = () => _getInfo().then(res => {
        const { data, msg } = res
        handleResponse(res, () => {
            const { list } = data
            props.getInfo({ list })
        }, () => { console.log(msg) })
    })

    const getInfoWithoutAction = () => _getInfo().then(res => {
        const { msg, data } = res
        handleResponse(res, () => {
            const { list } = data
            props.getInfoWithoutAction(list)
        }, () => { console.log(msg) })
    })

    const handleClick = () => {
        _getInfoNull()
    }

    return <div>
        <Button type="primary" onClick={handleClick}>测试返回值有问题跳转login页面（响应拦截）</Button>
        <br />
        <Button onClick={() => props.addNum({ count: props.count + 1 })}>num加1</Button><span>num={props.count}</span>
        <br />
        <Button onClick={props.getMessage}>异步获取message</Button><span>{props.message}</span>
        <br />
        <Button onClick={getInfo}>后台获取信息</Button><span>{props.message}</span>
        <br />
        <Button onClick={getInfoWithoutAction}>后台获取信息WithoutAction</Button>
        <br />
        <Table dataSource={props.list} columns={[{
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: '密码',
            dataIndex: 'password',
            key: 'password',
        }]} rowKey={(record) => record.id} />
    </div >
}

export default connect(mapStoreStateToProps, mapDispatches)(Index)  