// router
const express = require('express')
const router = express.Router()
const userRouter = require('./userRouter')
const checkinRouter = require('./checkinRouter')
const personRouter = require('./personRouter')

router.use('/user', userRouter)
router.use('/checkin', checkinRouter)
router.use('/person',personRouter)

module.exports = router