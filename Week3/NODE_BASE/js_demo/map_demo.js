const express = require('express')
const app = express()
app.listen(1234)

app.get('/:id', function (req, res){
    const {id} = req.params
    id = parseInt(id)

    if (db.get(id) == "undefined"){
        res.json({
            message : "없는 상품입니다"
        })
    }
    else{
        product = db.get(id)
        product.id=id
        res.json(product)
    }
})

let notebook={
    productName : "NoteBook",
    price : 10000 
}

let Cup={
    productName : "Cup",
    price : 10000 
}

let Chair={
    productName : "Chair",
    price : 10000 
}

let db = new Map()
db.set(1, notebook)
db.set(2, Cup)
db.set(3, Chair)