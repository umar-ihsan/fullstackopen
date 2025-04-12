require('dotenv').config()

const config = require('./utils/config')
const logger = require('./utils/logger') 
const express = require('express')
const mongoose = require('mongoose')

const blogsRouter = require('./controllers/blogs')


const app = express()

if(process.env.NODE_ENV === 'test'){

    mongoose.connect(config.MONGO_URI).then(logger.info(`connected to test db: ${config.MONGO_URI}`))
    
} else {

    mongoose.connect(config.MONGO_URI).then(logger.info(`connected to regular db: ${config.MONGO_URI}`))
}



app.use(express.json())

app.use('/api/blogs', blogsRouter)

app.use((err, req, res, next)=>{
    console.error(err)
    res.status(500).json({message: 'Something went wrong'})
  
  })

module.exports = app

