const { test, describe } = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')

test('(Exercise 4.3) dummy returns one', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  assert.strictEqual(result, 1)
})


describe('Exercise 4.4', () => {

  const listOne = [
    {
    id:"5a422a851b54a676234d17f7",
    title:"React patterns",
    author:"Michael Chan",
    url:"https://reactpatterns.com/",
    likes:7
    }
]

  const listTwo = [
   {
    _id: "5a422aa71b54a676234d17f8",
    title: "Go To Statement Considered Harmful",
    author: "Edsger W. Dijkstra",
    url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
    likes: 5,
    __v: 0
   },
   {
    _id: "5a422b3a1b54a676234d17f9",
    title: "Canonical string reduction",
    author: "Edsger W. Dijkstra",
    url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
    likes: 12,
    __v: 0
   },
   {
    _id: "5a422b891b54a676234d17fa",
    title: "First class tests",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
    likes: 10,
    __v: 0
   }
]
 
test('total likes for one blog', () => {

  const result = listHelper.totalLikes(listOne)
  assert.strictEqual(result, 7)

})

test('total likes for multiple blogs', () => {

  const result = listHelper.totalLikes(listTwo)
  assert.strictEqual(result, 27)

})

})



describe(' Exercise 4.5*', () => {

  const listTwo = [
   {
    _id: "5a422aa71b54a676234d17f8",
    title: "Go To Statement Considered Harmful",
    author: "Edsger W. Dijkstra",
    url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
    likes: 5,
    __v: 0
   },
   {
    _id: "5a422b3a1b54a676234d17f9",
    title: "Canonical string reduction",
    author: "Edsger W. Dijkstra",
    url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
    likes: 12,
    __v: 0
   },
   {
    _id: "5a422b891b54a676234d17fa",
    title: "First class tests",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
    likes: 10,
    __v: 0
   }
]

test('favorite in a list', () => {

  const result = listHelper.favoriteBlog(listTwo)
  assert.deepStrictEqual(result, listTwo[1])

})

})




