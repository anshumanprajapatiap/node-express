console.log('JWT Application start')

const express = require('express')
const app = express()


const port = 5001;
app.listen(port, ()=>{
    console.log(`Server Listening on port ${port}...`)
})