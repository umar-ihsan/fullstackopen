const dummy = (blogs) => {
    return 1
  }
const totalLikes = (blogs) => {

    const sum = blogs.reduce((sum,blog)=>{
        return sum + blog.likes
    },0)

    return sum
}

const favoriteBlog = (blogs) => {

    return blogs.reduce(( favorite, current )=>{
        return current.likes > favorite.likes ? current : favorite

    },blogs[0])
}
  
  module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
  }