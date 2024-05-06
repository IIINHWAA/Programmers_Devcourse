const express = require('express')
const app = express()
app.listen(1212)

const usersRouter = require('./routes/users')
const productsRouter = require('./routes/product')
app.use("/", usersRouter)
app.use("/", productsRouter)