const express = require('express')
const router = express.Router()
router.use(express.json()) //위에 선언해야지 오류 안 생김

let db =new Map()
var id = 1

router
    .route('/users')
    .post((req,res)=>{ //회원 가입 API
        if(req.body){
            let name = req.body.name
            db.set(id++,req.body)
            res.status(200).json({
                message : `${name}님 가입을 축하드립니다`
            })
        }
        else{
            exception(res)
        }
    })
    .get((req,res)=>{ //회원 전체 출력 API
        var member = [] 
        db.forEach(function(value,key){
            member.push(value)

        })
        res.status(200).json(member)
    })

router
    .route('/users/:id')
    .get((req, res)=>{ //회원 개별 출력 API
        let {id} = req.params
        id=parseInt(id)
        const user = db.get(id)

        if(user){
            res.status(200).json({
                name : user.name,
                region : user.region
            })
        }
        else{
            exception(res)
        }
    })
    .delete((req,res)=>{ //회원 탈퇴
        let {id} = req.params
        id=parseInt(id)
        const user = db.get(id)
        
        if(user){
            db.delete(id)
            res.status(200).json({
                message : "회원 탈퇴되었습니다."
            })
        }
        else{
            exception(res)
        }
    })

    function exception(res){ //예외 처리 함수
        res.status(404).json({
            message : "올바른 값을 입력해주세요"
        })
    }
    module.exports = router