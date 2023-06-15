import { Button, Table } from 'antd';
import { useState, useEffect } from "react";
import { _getInfo } from "../../service/test";
import "./index.scss";

const Index = () => {
  const [num, setNum] = useState(0);
  const [list, setList] = useState([])


  useEffect(() => {
    getInfo()
  }, [])

  const getInfo = () => {
    _getInfo().then(res => {
      const { code, data } = res
      if (code === 200) {
        const { list } = data
        setList(list)
      }
    })
  }

  const handleClick = () => {
    setNum(num + 1)
  }
  return (
    <div className='home-container'>
      <div>
        <Button type="primary" onClick={handleClick}>加1</Button>
        主页{num}</div>
      <div className='flex-container'>
        <div className={num % 2 === 0 ? 'flex-first' : 'flex-first-short'}>第一个</div>
        <div>第二个</div>
      </div>
      <div className='padding-container'>
        <Table dataSource={list} columns={[{
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
        }, {
          title: '密码',
          dataIndex: 'password',
          key: 'password',
        }]} rowKey={(record) => record.id} />
      </div>
    </div >
  )
}

export default Index