const express = require('express')

const app = express()
app.get('/getUser', (req, res) => {
    res.json({
        code: 200,
        message: 'OK',
        data: {
            user: {
                user_id: '123',
                auth: '1',
                name: 'hello'
            }
        }
    })
})

app.get('/getInfo', (req, res) => {
    const list = []
    for (let index = 1; index <= 50; index++) {
        list.push({ id: index, name: '111111-' + index, password: '2222+' + index })
    }
    res.json({
        code: 200,
        message: 'OK',
        data: { list }
    })
})

app.get('/getInfoNull', (req, res) => {
    res.json({
        code: 400,
        message: 'OK'
    })
})

app.get('/getNumber', (req, res) => {
    res.json({
        code: 200,
        message: 'OK'
    })
})
app.listen(6789)
console.log('服务器启动成功')