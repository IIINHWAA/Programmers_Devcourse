const express = require('express')
const router = express.Router()
const conn = require('../db-demo')
const {body, param, validationResult} = require('express-validator')
router.use(express.json()) 

const validate = (req,res,next)=>{
    const err = validationResult(req)
    if(err.isEmpty()){
        return next(); 
    }
    else{
        return res.status(400).json(err.array())
    } 
}

router
    .route('/channels')
    .post(
        [body('user_id').notEmpty().isInt().withMessage('userid 오류'),validate],
    (req, res, next)=>{//채널 전체 조회
    
        var {user_id} = req.body
        conn.query(
            'SELECT * FROM `channels` WHERE user_id =?',user_id,
            function (err, results, fields){
                if(err){
                    console.log(err)
                    return res.status(400).end()
                }
                if (results.length){
                    res.status(200).json(results)
                }
                else{
                    res.status(404).json()
                }
            }
        )
    }) 
    .post(
        [body('user_id').notEmpty().isInt().withMessage('userid 오류'),
        body('name').notEmpty().isString().withMessage('name 오류'),validate
    ],
    (req, res, next)=>{//채널 개별 생성
        const {name, sub_num, video_count, user_id} = req.body
        conn.query(
            'INSERT INTO channels (name, sub_num, video_count, user_id) VALUES (?,?,?,?)',
            [name, sub_num, video_count, user_id],
            function(err, results){
                if(err){return res.status(400).end()}
            }
        )

        res.status(200).json({
            message : `채널 생성 되었습니다..`
        })
    }) 

router
    .route('/channels/:id')
    .get(
    [param('id').notEmpty().withMessage('채널 아이디 필요'),validate]
    ,(req, res)=>{//채널 개별 조회
        let {id} = req.params
        id - parseInt(id)
        conn.query(
            'SELECT * FROM `channels` WHERE id = ?', id,
            function (err, results, fields){
                if(err){
                    console.log(err)
                    return res.status(400).end()
                }

                if (results.length){
                    res.status(200).json(results)
                }
                else{
                    return res.status(400).end()
                }
            }
        )
    }) 
    .put( //채널 개별 수정
        [body('user_id').notEmpty().isInt().withMessage('userid 오류'),
        body('name').notEmpty().isString().withMessage('name 오류'), validate]
    ,(req, res,)=>{
        let sql = `UPDATE channels SET name =? WHERE id=?`
        let values = [name,id]
        conn.query(sql,values,function(err,results){
            if (err){
                console.log(err)
                return res.status(400).end()
            }
            
            if(results.length) res.status(200).json(results)
            else res.status(404).json()
        })
        
    }) 
    .delete(
    [param('id').notEmpty().withMessage('채널 아이디 필요'),validate]
    ,(req, res, next)=>{//채널 개별 삭제
        let {id} = req.params
        id = parseInt(id)
        conn.query(
            'DELETE FROM channels WHERE id = ?', id,
            function(err, results, fields){
                if(err){
                    console.log(err)
                    return res.status(400).end()
                }

                res.status(200).json({
                    message : `삭제 되었습니다.`
                })
            }
        )
    }) 
    module.exports = router