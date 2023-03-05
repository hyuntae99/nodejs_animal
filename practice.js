const express = require('express')
const app = express()
const port = 3000

// "/" :라우팅
// 라우팅이 일치할경우 -> 함수 실행
app.get('/', (req, res) => {
    res.send('Hello World!')
})
//html파일로 가능
app.get('/dog', (req, res) => {
    res.send('<h1>DOG</h1>')
})
// 링크 가능
app.get('/nodejs', (req, res) => {
    res.send("<a href='https://www.npmjs.com/package/express'>nodejs_express 바로가기</a>")
})
//json 데이터
app.get('/cat', (req, res) => {
    res.send({'sound': '냐옹'})
    //res.json({'sound': '냐옹'})
})

///////////////////////////////////////////////////////////////////////////////////////

// params 이용
// app.get('/user/:id', (req, res) => {
//     // 입력받은 값(id) = q
//     const q = req.params
//     console.log(q.id)
//     res.json({'user id' : q.id})
// })

// query 이용 -> user/asd?q=~hyun&p=tae....
app.get('/user/:id', (req, res) => {
    // 입력받은 값(id) = q
    const q = req.query
    console.log(q)
})


// 서버가 켜져있음 -> 항상 실행중
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})