const express = require('express')
const app = express()
//app이라는 변수에 서버를 담아뒀다고 생각

// 실습 1)
// GET + "/"
app.get('/', function (req, res) { //app이라는 서버로부터 reponse를 get
  res.send('Hello World')
})

// 실습 2)
// API : GET + "http://localhost1234/test" 
// 결과 : "test2" 
app.get('/test', function (req, res) {
    res.send('test2')
  })

// 실습 3)
// API : GET + "http://localhost1234/test/1" 
// 결과 : "test3"
app.get('/test/1', function (req, res) {
    res.send('test3')
  })

// 실습 4)
// API : GET + "http://localhost1234/hello" 
// 결과 : "hello"
app.get('/hello', function (req, res) {
    res.send('hello')
  })

// 실습 5)
// API : GET + "http://localhost1234/bye" 
// 결과 : "bye"
app.get('/bye', function (req, res) {
    res.send('bye')
  })

// 실습 6) JSON 파일로 보내기
app.get('/nicetomeetyou', function (req, res) {
    res.json({
        say : 'Hi'
    })
  })


// 실습 7) 객체로 보내기

let nodejsBook={ //nodejsBool 객체
    title : "Node.js",
    price : 20000,
    description : "책 설명" 
}

app.get('/nodejsBook', function (req, res) {
    res.json(nodejsBook) //객체 전달
  })



  
app.listen(1234) //포트 넘버를 1234으로 설정

