const express = require('express')
const app = express()

// 쿼리 사용
app.get('/watch', function (req, res) {
    /*const q = req.query
    res.json({
      video : q.v,
      timeline : q.t
    })*/
  
    //객체를 사용한 경우
    //객체의 비구조화
    const {v,t} = req.query
    res.json({
      video : v,
      timeline :t
    })
  })
  //https://www.youtube.com/watch?v=KMhf4ex3d-E&t=892s 
  // ? 뒤는 쿼리 스트링으로 받아옴
  
  app.listen(1234) //포트 넘버를 1234으로 설정
  
  