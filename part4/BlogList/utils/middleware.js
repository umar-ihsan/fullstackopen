const jwt = require('jsonwebtoken')
const User = require('../models/user')

const tokenExtractor = (request, response, next) => {

    const authorization = request.get('authorization')
    if (authorization && authorization.startsWith('Bearer ')) {
      request.token = authorization.replace('Bearer ', '')
    } else {
      request.token = null
    }
    
  next()
}


const userExtractor = async (request, response, next) => {
  console.log('Token in userExtractor:', request.token)
  try {
    
    
    console.log('About to verify token')
    const decodedToken = jwt.verify(request.token, process.env.SECRET)
    console.log('Token verified, decoded:', decodedToken)
    
    if (!decodedToken.id) {
      console.log('No id in decoded token')
      return response.status(401).json({ error: 'token invalid' })
    }
    
    console.log('Looking up user with id:', decodedToken.id)
    const user = await User.findById(decodedToken.id)
    console.log('User found:', user ? 'yes' : 'no')
    
    if (!user) {
      return response.status(401).json({ error: 'user not found' })
    }

    request.user = user
    console.log('User attached to request')
    next()
  } catch (error) {
    console.log('Error in userExtractor:', error.message)
    return response.status(401).json({ error: 'token invalid' })
  }
}


const errorHandler = (error, request, response, next) => {
    if (error.name === 'CastError') {
      return response.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
      return response.status(400).json({ error: error.message })
    } else if (error.name === 'MongoServerError' && error.message.includes('E11000 duplicate key error')) {
      return response.status(400).json({ error: 'expected `username` to be unique' })
    } else if (error.name ===  'JsonWebTokenError') {
      return response.status(401).json({ error: 'token invalid' })
    }
  
    next(error)
  }


  module.exports = { errorHandler, tokenExtractor, userExtractor }