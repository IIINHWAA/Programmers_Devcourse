const express = require('express')
const app = express()
const port = 1122

app.get('/', (req, res)=>{
    res.send("Hello World!")
})

app.use(express.json())
app.post('/test', function(req,res){
    //body에 숨겨져서 들어온 데이터 뿌리기
    res.json(req.body)
})

app.listen(port, ()=> {
    console.log('Example')
})