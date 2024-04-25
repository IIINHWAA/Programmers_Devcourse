const express = require('express')
const app = express()


app.get('/', function (req, res) { 
  res.send('Hello World')
})

//자바스크립트의 강제형변환 -> Str를 Int로 parseInt('숫자')

// 파라미터 사용
  app.get('/products/:n', function (req, res) {
    console.log(req.params.n)

    res.json({
      num : req.params.n
    })
  })


app.listen(1234) //포트 넘버를 1234으로 설정

