const User = require('../models/user')



const initialBlogs = [
    {
      title: "How to Learn JavaScript",
      author: "John Doe",
      url: "https://www.johndoe.com/learn-javascript",
      likes: 150
    },
    {
      title: "The Future of Web Development",
      author: "Jane Smith",
      url: "https://www.janesmith.com/future-web-dev",
      likes: 220
    },
    {
      title: "Understanding MongoDB",
      author: "Alice Johnson",
      url: "https://www.alicejohnson.com/understand-mongodb",
      likes: 180
    },
    {
      title: "React vs Vue: Which to Choose?",
      author: "Bob Lee",
      url: "https://www.boblee.com/react-vs-vue",
      likes: 300
    },
    {
      title: "CSS Tips and Tricks",
      author: "Charlie Brown",
      url: "https://www.charliebrown.com/css-tips-tricks",
      likes: 250
    }
  ];

  const usersInDb = async () => {
    const users = await User.find({})
    return users.map(u => u.toJSON())
  }

  module.exports = { initialBlogs,
    usersInDb
   }