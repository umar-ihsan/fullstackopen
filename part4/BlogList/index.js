require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const config = require('./utils/config')
const logger = require('./utils/logger') 
const blogsRouter = require('./controllers/blogs')

const app = express()

mongoose.connect(config.MONGO_URI).then(logger.info(`connected to ${config.MONGO_URI}`))

app.use(express.json())

app.use('/api/blogs', blogsRouter)



app.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})