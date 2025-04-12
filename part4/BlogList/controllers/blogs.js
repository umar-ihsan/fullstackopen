
const blogsRouter = require('express').Router()
// const asyncHandler = require('async-handler') // automatically sends exceptions to error handling middlleware. will allow us to avoid writing try-catch blocks
const Blog = require('../models/blog')


// Simple async handler if you don't have express-async-handler
const asyncHandler = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

blogsRouter.get('/', asyncHandler (async (request, response) => {
  
  const blogs = await Blog.find({})
  response.json(blogs)
  
}));
  
blogsRouter.post('/', asyncHandler (async (request, response) => {
  
  let blog = new Blog({
    ...request.body,
    likes: request.body.likes || 0
  })

  if (!blog.title || !blog.url){
    console.log('no title or body found')
    return response.status(400).end()
  }

    await blog.save()
    response.status(201).json(blog)
    
  }));

  blogsRouter.delete('/:id', asyncHandler (async (request, response) => {

    const {id} = request.params

    console.log(`about to delete id: ${id}`)
    const blog = await Blog.findByIdAndDelete(id)
    if (blog) {
      response.status(204).end();
    } else {
      response.status(404).json({ error: 'Blog not found' });
    }
    
    
  }));


  blogsRouter.put('/:id', asyncHandler(async (request, response) => {
    const { id } = request.params;
    const { title, author, url, likes } = request.body;
  
    const blogToUpdate = {
      title,
      author,
      url,
      likes
    };
  
    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      blogToUpdate,
      { new: true, runValidators: true }
    );
  
    if (updatedBlog) {
      response.json(updatedBlog);
    } else {
      response.status(404).json({ error: 'Blog not found' });
    }
  }));


module.exports = blogsRouter



