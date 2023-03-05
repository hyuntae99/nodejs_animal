const express = require('express')
var cors = require('cors')
const app = express()
// 포트 값
const port = 3000 

// 빈칸일 경우 : 모든 요청에 응답하겠다.
// 제한을 걸어둘 수 있음.
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/sound/:name', (req, res) => {
    // name 변수에 바로 key값이 들어감.
    const { name } = req.params 

    if(name == 'dog'){
        res.json({'sound' : '멍멍'})
    } else if(name == 'cat'){
        res.json({'sound' : '냐옹', 'img' : 'https://purr.objects-us-east-1.dream.io/i/mjzu8336.jpg'})
    } else if(name == 'pig'){
        res.json({'sound' : '꿀꿀'})
    } else{
        res.json({'sound' : '알 수 없음'})
    }
})


// 서버가 켜져있음 -> 항상 실행중
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})