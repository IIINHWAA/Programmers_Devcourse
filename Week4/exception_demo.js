const express = require('express')
const app = express()

app.listen(1234)

app.get('/', function(req,res){
    res.send('Hello world')
})

const person = [
    {id : 1, name : 'inhwa'},
    {id : 2, name : 'ina'},
    {id : 3, name : 'inamon'}
]

//전체 조회
app.get('/person', (req,res)=>{
    res.json(person)
})

//개별 조회 
//json array는 배열이기 때문에 index 0부터 시작
app.get('/person/:id', (req,res)=>{
    let id = req.params.id
    //방법 1 : id-1
    //let person_name = person[id] 
    //res.json(person_name)
    
    //방법 2 : forEach문으로 객체의 id값 직접 비교
    /*
    let find = ""
    person.forEach(function(person_name){
        if (person_name == id){
            find = person_name
        }
    })
    res.json(find)*/

    //방법 3 : find() 사용해서 특정 요소 찾기
    var findPerson = person.find(f=>f.id==id)
    if(findPerson){
        res.json(findPerson)
    }
    else{ //예외 처리
        res.status(404).send(
            "에러 : 해당 아이디 없음"
        )
    }
})