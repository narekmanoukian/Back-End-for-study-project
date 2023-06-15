const Router = require('express')
const router = new Router()

const testRouter = require('./testRouter')
const themeRouter = require('./themeRouter')
const userRouter = require('./userRouter')


router.use('/user', userRouter)
router.use('/test', testRouter)
router.use('/theme', themeRouter)

module.exports = router