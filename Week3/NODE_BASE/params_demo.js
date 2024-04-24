const express = require('express')
const app = express()


app.get('/', function (req, res) { 
  res.send('Hello World')
})


let nodejsBook={ 
    title : "Node.js",
    price : 20000,
    description : "책 설명" 
}

// products/__ : 빈칸에 들어올 값을 n이라는 변수에 담기
  app.get('/products/:n', function (req, res) {
    console.log(req.params.n)

    res.json({
      num : req.params.n
    })
  })


app.listen(1234) //포트 넘버를 1234으로 설정

