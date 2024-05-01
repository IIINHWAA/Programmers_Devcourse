const express = require('express')
const app = express()
app.listen(1122)

let db =new Map()
var id = 1
//로그인
app.get('/login', (req, res)=>{

})

//회원가입
app.use(express.json())
app.post('/join', (req, res)=>{
    if(req.body){
        db.set(id++, req.body)
    }
    else{
        res.status(201).json({
            message : `${db.get(id-1).name}님 환영합니다.`
        })
    }
})

//회원개별조회
app.get('/users/:id', (req, res)=>{
    
})

//회원개별탈퇴
app.delete('/users/:id', (req, res)=>{
    
})