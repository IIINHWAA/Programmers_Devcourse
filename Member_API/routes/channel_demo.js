const express = require('express')
const router = express.Router()
const conn = require('../db-demo')
router.use(express.json()) 

router
    .route('/channels')
    .get((req, res)=>{//채널 전체 조회
        conn.query(
            'SELECT * FROM `channels`',
            function (err, results, fields){
                if (results.length){
                    res.status(200).json(results)
                }
                else{
                    notFoundChannel(res)
                }
            }
        )
    }) 
    .post((req, res)=>{//채널 개별 생성
        if(req.body){
            const {name, sub_num, video_count, user_id} = req.body
            conn.query(
                'INSERT INTO channels (name, sub_num, video_count, user_id) VALUES (?,?,?,?)',
                [name, sub_num, video_count, user_id]
            )
    
            res.status(200).json({
                message : `채널 생성 되었습니다..`
            })
        }
        else{
            res.status(201).json({
                message : `다시 입력해주세요`
            })
        }
    }) 

router
    .route('/channels/:id')
    .get((req, res)=>{//채널 개별 조회
        let {id} = req.params
        id - parseInt(id)
        conn.query(
            'SELECT * FROM `channels` WHERE id = ?', id,
            function (err, results, fields){
                if (results.length){
                    res.status(200).json(results)
                }
                else{
                    notFoundChannel(res)
                }
            }
        )
    }) 
    .put((req, res)=>{//채널 개별 수정
        //수정은 그때그때에 따라 다르게
    }) 
    .delete((req, res)=>{//채널 개별 삭제
        let {id} = req.params
        id = parseInt(id)
        conn.query(
            'DELETE FROM channels WHERE id = ?', id,
            function(err, results, fields){
                res.status(200).json({
                    message : `삭제 되었습니다.`
                })
            }
        )
    }) 
    function notFoundChannel(){
        res.status(404).json({
            message : "채널 정보를 찾을 수 없음"
        })
    }
    module.exports = router