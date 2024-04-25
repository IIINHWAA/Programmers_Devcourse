//express 모듈 세팅
const { json } = require('express')
const express = require('express')
const app = express()
app.listen(1234)

//데이터 세팅
let youtuber1 = {
    channelTitle : "INHWA",
    sub : "10만명",
    videoNum : "2천개"
}

let youtuber2 = {
    channelTitle : "INAMON",
    sub : "100만명",
    videoNum : "7천개"
}

let youtube = new Map()
youtube.set(1, youtuber1)
youtube.set(2, youtuber2)

//REST API 설계
app.get('/youtuber/:id', function(req, res){
    let {id} = req.params
    id = parseInt(id)
    if (youtube.get(id)==undefined){
        res.json({
            messege : "해당 유튜버 없음"
        })
    }
    else {
        res.json(youtube.get(id))
    }
})