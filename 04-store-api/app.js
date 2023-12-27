express = require('express')
app = express()
require('dotenv').config()

// middleware


// routes

const port = process.env.PORT || 5001

const start = async () => {

    try{
        const connectingString = `${process.env.method}://${process.env.dbHost}:${process.env.password}@${process.env.projectName}.${process.env.instanceName}/${process.env.dbName}?retryWrites=true&w=majority`;
        console.log(connectingString)
        // await connectDB(connectingString);
        app.listen(port, ()=>{
            console.log(`Server is listening on port ${port}....`)
        })
    }catch(err){
        console.log(`Error ${err}`)
    }
}

start();