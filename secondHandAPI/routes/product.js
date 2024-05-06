const express = require('express')
const router = express.Router()
router.use(express.json()) //위에 선언해야지 오류 안 생김

let db =new Map()
var id = 1

router
    .route('/products')
    .post((req, res)=>{ //팔 물건 등록  (이름 지역 전화번호 상품정보)
        if(req.body){
            db.set(id++, req.body)
            res.status(200).json({
                message : "물건이 등록되었습니다."
            })
        }      
    }) 
    .get((req,res)=>{//물건 전체 조회
        var products = [] 
        db.forEach(function(value,key){
            products.push(value)

        })
        res.status(200).json(products)
    }) 
    .get((req, res)=>{ //물건 개별 조회
    

    }) 
    .delete() //물건 구매(삭제)

    module.exports = router