const { test, after, beforeEach } = require('node:test')
const assert = require('node:assert')
const mongoose = require('mongoose')
const supertest = require('supertest')
const helper = require('./test_helper')
const Blog = require('../models/blog')
const api = require('../api')

const app = supertest(api)

beforeEach(async () => {

  await Blog.deleteMany({})
  
  const blogObjects = helper.initialBlogs.map(blog => new Blog(blog))
  
  const promiseArray = blogObjects.map(blog => blog.save())
  
  await Promise.all(promiseArray)
})

test('4.8', async () => {
  
  const response = await app.get('/api/blogs')

  assert.strictEqual(response.body.length, helper.initialBlogs.length)
   
})


test('4.9', async () => {
  
  const response = await app
   .get('/api/blogs')
   .expect(200)
   .expect('Content-Type', /application\/json/)
  
   assert.ok(response.body[0].id)
   assert.strictEqual(response.body[0]._id, undefined)
   
})


test('4.10', async () => {
  

  const newNote = {
    title: "Testing exercise 4.10",
    author: "Umar Ihsan",
    url: "https://www.umarihsan.com/css-tips-tricks",
    likes: 250
  }
  const response = await app
   .post('/api/blogs')
   .send(newNote)
   .expect(201)
  
   const newCount = await app.get('/api/blogs')

   assert.strictEqual(newCount.body.length, helper.initialBlogs.length + 1)
   
})

test('4.11', async () => {
  

  const newNote = {
    title: "Testing exercise 4.10",
    author: "Umar Ihsan",
    url: "https://www.umarihsan.com/css-tips-tricks",
  }
  const response = await app
   .post('/api/blogs')
   .send(newNote)
   .expect(201)

   assert.strictEqual(response.body.likes, 0)
   
})

test('4.12', async () => {
  

  const newNote = {
    author: "Umar Ihsan"
  }

  const response = await app
   .post('/api/blogs')
   .send(newNote)
   .expect(400)
   
})


test('4.13', async () => {

  const blogs = await Blog.find({});
  const blogToDelete = blogs[1];

  const response = await app
    .delete(`/api/blogs/${blogToDelete._id}`).expect(204)
    
  const deletedBlog = await Blog.findByIdAndDelete(blogToDelete._id);
  assert.strictEqual(deletedBlog, null);  // Should return null, since the blog was deleted
});


test('4.14', async () => {

  const blogsAtStart = await Blog.find({});
  const blogToUpdate = blogsAtStart[0];
  

  const updatedBlogData = {
    title: 'OnePiece is Awesome',
    author: 'Umii',
    url: 'https://onepiece.wiki.com',
    likes: 800
  };
  
  
  await app
    .put(`/api/blogs/${blogToUpdate._id}`)
    .send(updatedBlogData)
    .expect(200)
    .expect('Content-Type', /application\/json/);
    
  
  const updatedBlog = await Blog.findById(blogToUpdate._id);
  
  assert.strictEqual(updatedBlog.title, 'OnePiece is Awesome');
});

after(async () => {
  await mongoose.connection.close()
  console.log('Connection closed')
})