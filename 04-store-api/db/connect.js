const mongoose = require('mongoose')

const connectDB = (url) => {
  return mongoose.connect(url)
  .then(()=>console.log('CONNECTED TO DATABASE'))
  .catch((err)=>console.log(`Error ${err}`))
}

module.exports = connectDB