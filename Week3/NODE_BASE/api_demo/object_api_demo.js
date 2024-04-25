const express = require('express')
const app = express()

let youtuber1 = {
    channelTitle:"INHWA",
    sub : "100만명",
    videoNum : "1개"
}

let youtuber2 = {
    channelTitle:"INAMON",
    sub : "500만명",
    videoNum : "10개"
}

  app.get('/:nickname', function (req, res) {

    const {nickname} = req.params
    if (nickname == "INHWA"){
        res.json(youtuber1)
    }

    else if (nickname=="INAMON"){
        res.json(youtuber2)
    }
  })


app.listen(1234) //포트 넘버를 1234으로 설정

