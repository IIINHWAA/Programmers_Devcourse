const express = require('express')
const router = express.Router()
const conn = require('../db-demo')
router.use(express.json()) //위에 선언해야지 오류 안 생김

//로그인
router.post('/login', (req, res)=>{
    let {email, password} = req.body
    var loginUser = {}
    conn.query(
        'SELECT * FROM `users` WHERE email = ?', email,
        function (err, results, fields){
            var loginUser = results[0];
            if (loginUser && loginUser.password == password){
                res.status(200).json({
                    message : `로그인 되었습니다.`
                })
            }
            else{
                res.status(404).json({
                    message : `아이디 또는 비밀번호 오류.`
                })
            }
        }
    )     
})

//회원 가입
router.post('/join', (req, res)=>{
    if(req.body){
        const {email, name, password, contact} = req.body
        conn.query(
            'INSERT INTO users (email, name, password, contact) VALUES (?,?,?,?)',
            [email, name, password, contact]
        )

        res.status(200).json({
            message : `회원 가입 되었습니다.`
        })
    }
    else{
        res.status(201).json({
            message : `다시 입력해주세요`
        })
    }
})



//회원 개별 기능
router
    .route('/users')
    .get((req, res)=>{ //회원 개별 조회
        let {email} = req.body
        conn.query(
            'SELECT * FROM `users` WHERE email = ?', email,
            function (err, results, fields){
                res.status(200).json(results)
            }
        )
    }) 
    .delete((req, res)=>{ //회원 개별 삭제
        let {email} = req.body
        conn.query(
            'DELETE FROM users WHERE email = ?', email,
            function(err, results, fields){
                res.status(200).json({
                    message : `삭제 되었습니다.`
                })
            }
        )
    })

module.exports = router