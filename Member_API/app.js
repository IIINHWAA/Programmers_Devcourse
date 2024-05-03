const express = require('express')
const app = express()
app.listen(1123)

const userRouter = require('./routes/user_demo')
const channelRouter = require('./routes/channel_demo')

app.use("/", userRouter)
app.use("/", channelRouter)