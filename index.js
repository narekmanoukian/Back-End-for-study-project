require('dotenv').config()
const express = require('express')
const sequelize = require('./database')
const PORT = process.env.PORT
const models = require ('./models/models')
const cors = require('cors')
const router = require('./routes/index')


const app = express() 
app.use(cors())
app.use(express.json())
app.use('/api', router)



const start = async () => {
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log( `Server started on PORT ${PORT}`))

    } catch (e) {
        console.log (e)
    }
}
start()

