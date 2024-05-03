const express = require('express')
const app = express()
app.listen(1123)
app.use(express.json())

let db = new Map()
var id = 1


app
    .route('/channels')
    .get((req, res)=>{//채널 전체 조회
        var channels = []
        if (db.size){
            db.forEach(function(value, key){
                channels.push(value)
            })
            res.json(channels)
        }
        else{
            res.status(404).json({
                message : "조회할 채널이 없습니다"
            })
        }
        
    }) 
    .post((req, res)=>{//채널 개별 생성
        if (req.body.channelTitle){
            db.set(id++, req.body)

            res.status(201).json({
            message : `${db.get(id-1).channelTitle} 채널을 응원합니다`
            })
        }
        else{
            res.status(400).json({
                message : "값이 옳지 않습니다."
            })
        }
    }) 

app
    .route('/channels/:id')
    .get((req, res)=>{//채널 개별 조회
        let {id} = req.params
        id = parseInt(id)

        var channel = db.get(id)

        if (channel){
            res.status(200).json(channel)
        }
        else{
            res.status(404).json({
                message : "채널 정보를 찾을 수 없음"
            })
        }
    }) 
    .put((req, res)=>{//채널 개별 수정
        let {id} = req.params
        id = parseInt(id)

        var channel = db.get(id)
        var oldTitle = channel.channelTitle
        if(channel){
            var newTitle = req.body.channelTitle
            channel.channelTitle=newTitle
            db.set(id,channel)
            res.json({
                message : `채널명이 ${oldTitle}에서 ${newTitle}으로 변경되었습니다.`
            })
        }
        else{
            res.status(404).json({
                message : "채널 정보를 찾을 수 없습니다."
            })
        }

    }) 
    .delete((req, res)=>{//채널 개별 삭제
        let {id} = req.params
        id = parseInt(id)

        var channel = db.get(id)
        name = channel.channelTitle
        if (channel){
            db.delete(id)
            res.status(200).json({
                message : `${name}님 삭제가 완료되었습니다.`
            })
        }
        else{
            res.status(404).json({
                message : "채널 정보를 찾을 수 없음"
            })
        }
    }) 