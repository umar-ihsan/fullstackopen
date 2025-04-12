require('dotenv').config()

const config = require('./utils/config')
const logger = require('./utils/logger') 
const express = require('express')
const mongoose = require('mongoose')

const middlew = require('./utils/middleware')

const loginRouter = require('./controllers/login')
const blogsRouter = require('./controllers/blogs')
const usersRouter = require('./controllers/users')



const app = express()

if(process.env.NODE_ENV === 'test'){

    mongoose.connect(config.MONGO_URI).then(logger.info(`connected to test db: ${config.MONGO_URI}`))
    
} else {

    mongoose.connect(config.MONGO_URI).then(logger.info(`connected to regular db: ${config.MONGO_URI}`))
}



app.use(express.json())

app.use(middlew.tokenExtractor)
app.use(middlew.userExtractor)


app.use('/api/login', loginRouter)
app.use('/api/blogs', blogsRouter)
app.use('/api/users', usersRouter)

app.use(middlew.errorHandler)

module.exports = app

