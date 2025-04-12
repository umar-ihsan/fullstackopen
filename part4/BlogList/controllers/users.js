
const usersRouter = require('express').Router()

const bcrypt = require('bcrypt')

const User = require('../models/user')


const asyncHandler = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};


usersRouter.post('/', asyncHandler(async (request, response) => {
  const { username, name, password } = request.body

  if(!(username && password)){
    response.status(400).json({message:'no username or password'})
  }

  if(!(username.length>3)){
    response.status(400).json({message:'username or password should be longer than 3 words'})
  }

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)

  const user = new User({
    username,
    name,
    passwordHash,
  })

  const savedUser = await user.save()

  response.status(201).json(savedUser)
}))

usersRouter.get('/', asyncHandler(async (request, response) => {
    const users = await User.find({}).populate('blogs')
    response.json(users)
  }))

module.exports = usersRouter