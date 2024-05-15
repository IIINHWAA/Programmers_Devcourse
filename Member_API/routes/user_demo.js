const express = require('express')
const router = express.Router()
const conn = require('../db-demo')
const {body, param, validationResult} = require('express-validator')

//jwt 모듈
const jwt = require('jsonwebtoken');

//dotenv 모듈
const dotenv = require('dotenv');
dotenv.config();

router.use(express.json()) //위에 선언해야지 오류 안 생김


const validate = (req,res,next)=>{
    const err = validationResult(req)
    if(err.isEmpty()){
        return next(); 
    }
    else{
        return res.status(400).json(err.array())
    } 
}

//로그인
router.post( '/login',  
[body('email').notEmpty().isEmail().withMessage('email 오류'),
body('password').notEmpty().isString().withMessage('password 오류'),
validate],
(req, res, next)=>{
    let {email, password} = req.body
    conn.query(
        'SELECT * FROM `users` WHERE email = ?', email,
        function (err, results, fields){
            var loginUser = results[0];
            if (loginUser && loginUser.password == password){
                //token 발급------------------
                const token = jwt.sign({
                    email : loginUser.email,
                    name : loginUser.name
                }, ""+process.env.PRIVATE_KEY, {
                    expiresIn : '30m', //유효기간
                    issuer : 'inhwa'
                });

                //res.cookie()
                res.cookie("tokern", token, {
                    httpOnly : true
                });
                
                res.status(200).json({
                    message : `로그인 되었습니다.`,
                    token : token
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
router.post('/join', [
    body('email').notEmpty().isEmail().withMessage('email 오류'),
    body('name').notEmpty().isString().withMessage('name 오류'),
    body('password').notEmpty().isString().withMessage('password 오류'),
    body('contact').notEmpty().isString().withMessage('contact 오류'),
    validate],
    (req, res, next)=>{
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
    .get([
        body('email').notEmpty().isEmail().withMessage('email 오류'),
        validate],
        (req, res, next)=>{ //회원 개별 조회
        let {email} = req.body
        conn.query(
            'SELECT * FROM `users` WHERE email = ?', email,
            function (err, results, fields){
                res.status(200).json(results)
            }
        )
    }) 
    .delete(
        [body('email').notEmpty().isEmail().withMessage('email 오류'),
        validate],
        (req, res, next)=>{ //회원 개별 삭제
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