const express = require('express')
const app = express()
const cors = require('cors')

//cors
app.use(cors())

// mongo
const db = require('./db/connect')

// router
const adminRouter = require('./router/index')
app.use('/admin', adminRouter)

app.listen(3000,()=>{
  console.log('serve start')
})