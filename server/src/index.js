const express = require('express')
const cors = require('cors')
const connect = require('./db/connect')
const userRouter = require('./routes/userRouter')
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(cors())
app.use(userRouter)

connect()

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})