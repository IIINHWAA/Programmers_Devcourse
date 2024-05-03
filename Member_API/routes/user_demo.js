const express = require('express')
const router = express.Router()
router.use(express.json()) //위에 선언해야지 오류 안 생김

let db =new Map()
var id = 1

//로그인
router.post('/login', (req, res)=>{
    
    const {userId, password} = req.body
    var loginUser = {}
    db.forEach(function(user, id){
        if (user.userId ===userId){
            loginUser =user

        }
    })
    if(!isEmpty(loginUser)){
        console.log("아이디 일치")
        if (loginUser.password ===password){
            console.log("비밀번호 일치")
            res.status(200).json({
                message : "로그인 완료"
            })
        }
        else{
            console.log('비밀번호 오류')
            res.status(404).json({
                message : "비밀번호가 일치하지 않습니다."
            })
        }
    }
    else{
        console.log("아이디 불일치")
        res.status(404).json({
            message : "일치하는 아이디가 없습니다."
        })
    }
})

function isEmpty(obj){
    if (Object.keys(obj).length ===0){
        return true
    }
    else{
        return false
    }
}

//회원가입
router.post('/join', (req, res)=>{
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
router
    .route('/users/:id')
    .get((req, res)=>{
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
    .delete((req, res)=>{//회원개별탈퇴
        let {id} = req.params
        id=parseInt(id)
        const user = db.get(id)

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

module.exports = router