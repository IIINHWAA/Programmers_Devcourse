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

let youtube_db = new Map()
let id = 1
youtube_db.set(id++, youtuber1)
youtube_db.set(id++, youtuber2)


//REST API 설계 : 개별 유튜버 조회
app.get('/youtubers/:id', function(req, res){
    let {id} = req.params
    id = parseInt(id)

    if (youtube_db.get(id)==undefined){
        res.json({
            messege : "해당 유튜버 없음"
        })
    }

    else {
        res.json(youtube_db.get(id))
    }
})


//REST API 설계 : 유튜버 전체 조회
app.get('/youtubers', function(req,res){
    let jsonObj = {};
    if (youtube_db){
        youtube_db.forEach((value, key)=>{jsonObj[key] = value})
        res.json(jsonObj)
    }
    else{
        res.status(404).send("유튜버가 존재하지 않습니다.")
    }
})


// REST API 설계 : 유튜버 등록
app.use(express.json()) //http 외 모듈인 '미들웨어' : json 설정
app.post('/youtuber', function(req,res){
    //console.log(req.body)
    youtube_db.set(id++, req.body)
    res.json({
        message : youtube_db.get(id-1).channelTitle + "님, 유튜브 채널 생성 축하드립니다."
    })
})



// REST API 설계 : 유튜버 삭제
app.delete('/youtubers/:id', function(req,res){
    let {id} = req.params
    id = parseInt(id)

    let youtuber = youtube_db.get(id)

    if (youtuber==undefined){
        res.json({
            messege : "해당 유튜버 없음"
        })
    }
    else{
        let name = youtuber.channelTitle
        youtube_db.delete(id)
    
        
        res.json({
            message :name + "님, 채널이 삭제되었습니다."
        })
    }   
})

//REST API 설계 : 전체 채널 삭제
app.delete('/youtubers', function(req,res){
    if (youtube_db.size>=1){
        youtube_db.clear()
        res.json({
            message : "전체 채널이 삭제되었습니다."
        })
    }
    else{
        res.json({
            message : "삭제할 데이터가 없습니다."
        })
    }

})

//REST API 설계 : 채널명 수정
app.put('/youtubers/:id', function(req,res){
    let {id} = req.params
    id = parseInt(id)
    let youtuber = youtube_db.get(id)
    
    let before_name = youtube_db.get(id).channelTitle;

    if (youtuber == undefined){
        res.json({
            message : "없는 유튜버입니다."
        })
    }
    else{
        let new_name = req.body.channelTitle
        youtuber.channelTitle = new_name
        youtube_db.set(id,youtuber)
        let after_name = req.body.channelTitle
        res.json({
            message : before_name+"님 "+after_name+"으로 변경되었습니다."
        })
    }
})