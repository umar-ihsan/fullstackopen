const jwt = require('jsonwebtoken')

const blogsRouter = require('express').Router()

const Blog = require('../models/blog')
const User = require('../models/user')


const asyncHandler = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};



blogsRouter.get('/', asyncHandler (async (request, response) => {

  
  
  const blogs = await Blog.find({})
  response.json(blogs)
  
}));
  
blogsRouter.post('/', asyncHandler (async (request, response) => {
  
  const user = request.user

  if (!user) {
    return response.status(401).json({ error: 'authentication required' })
  }

  let blog = new Blog({
    ...request.body,
    likes: request.body.likes || 0,
    user: user._id

  })

  if (!blog.title || !blog.url){
    console.log('no title or body found')
    return response.status(400).end()
  }

    const savedBlog = await blog.save()
    user.blogs = user.blogs.concat(savedBlog._id)
  await user.save()
    response.status(201).json(blog)
    
  }));

  blogsRouter.delete('/:id', asyncHandler (async (request, response) => {

    const {id} = request.params

    console.log(`about to delete id: ${id}`)

    const decodedToken = jwt.verify(request.token, process.env.SECRET)

    if (!request.token || !decodedToken.id) {
      return response.status(401).json({ error: 'token missing or invalid' })
    }

    const blog = await Blog.findByIdAndDelete(id)

    if (!blog) {
      return response.status(404).json({ error: 'Blog not found' })
    }
    if (blog.user.toString() !== decodedToken.id.toString()) {
      return response.status(403).json({ error: 'only the creator can delete this blog' })
    }
    await Blog.findByIdAndDelete(id)
    response.status(204).end()
    
  }));


  blogsRouter.put('/:id', asyncHandler(async (request, response) => {


    
    const { id } = request.params;
    const { title, author, url, likes, user } = request.body;
  
    const blogToUpdate = {
      title,
      author,
      url,
      likes,
      user
    };
    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      blogToUpdate
    );
    if (updatedBlog) {
      response.json(updatedBlog);
    } else {
      response.status(404).json({ error: 'Blog not found' });
    }
  }));


module.exports = blogsRouter



