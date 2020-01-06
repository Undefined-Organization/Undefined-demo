const express = require('express')
const app = express()

// mongo
const db = require('./db/connect')

// router
const adminRouter = require('./router/index')
app.use('/admin', adminRouter)

app.listen(3000,()=>{
  console.log('serve start')
})