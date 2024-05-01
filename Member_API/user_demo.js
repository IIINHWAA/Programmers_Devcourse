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

        res.status(201).json({
            message : `${db.get(id-1).name}님 환영합니다.`
        })
    }
    else{
        res.status(201).json({
            message : `다시 입력해주세요`
        })
    }
})

//회원개별조회
app.get('/users/:id', (req, res)=>{
    let {id} = req.params
    id=parseInt(id)
    const user = db.get(id)
    if(user==undefined){
        res.status(200).json({
            message : "없는 회원입니다."
        })
    }
    else{
        res.status(200).json({
            userId : user.userId,
            name : user.name
        })
    }
})

//회원개별탈퇴
app.delete('/users/:id', (req, res)=>{
    let {id} = req.params
    id=parseInt(id)

    if(user==undefined){
        res.status(200).json({
            message : "없는 회원입니다."
        })
    }
    else{
        db.delete(id)

        res.status(200).json({
            message : "회원 정보가 삭제되었습니다."
        })
    }

})