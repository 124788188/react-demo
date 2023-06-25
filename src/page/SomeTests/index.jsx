import { Button, Input } from 'antd';
import { useState } from "react";

const Index = () => {
    const [test1, setTest1] = useState({ code: 'hello,world', ruleNum: 1, result: '' })

    const encode = (code, num) => {
        const arr = [
            'a', 'b', 'c', 'd', 'e', 'f', 'g',
            'h', 'i', 'j', 'k', 'l', 'm', 'n',
            'o', 'p', 'q', 'r', 's', 't',
            'u', 'v', 'w', 'x', 'y', 'z'
        ]
        const offset = getOffset(num)
        let str = ''
        code.split('').forEach(ele => {
            const index = arr.indexOf(ele)
            if (index === -1) {
                str = str + ele
            } else {
                str = str + arr[(index + offset) % 26]
            }
        })
        setTest1({ ...test1, result: str })
    }

    const getOffset = num => {
        let result = 3
        let _num = 1
        while (_num < num) {
            let is = true
            if (result % 2 === 0 || (result > 3 && result % 3 === 0) || (result > 5 && result % 5 === 0)) {
                result++
                continue
            }
            for (let i = 2; i <= Math.sqrt(result); i++) {
                if (result % i === 0) {
                    is = false
                    break
                }
            }
            _num = is ? _num + 1 : _num
            result++
        }
        return result - 1
    }

    return (
        <div>
            {"测试一：加密--将输入1中的字符串中的每个小写字母转成其后面第输入2个质数位的字母(超过26则从a再开始)"}
            <div style={{ display: 'flex' }}>
                <div style={{ width: 150 }}>{'输入1：'}</div><Input value={test1.code} onChange={e => setTest1({ ...test1, code: e.target.value })} />
                <div style={{ width: 150 }}>{'输入2：'}</div><Input value={test1.ruleNum} onChange={e => setTest1({ ...test1, ruleNum: e.target.value })} />
                <Button type="primary" onClick={() => encode(test1.code, test1.ruleNum)}>加密</Button>
                <div style={{ width: 150 }}>{'结果：'}</div>
                <div style={{ width: 500 }}>{test1.result}</div>
            </div>
        </div >
    )
}

export default Index