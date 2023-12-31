
const express = require('express')
const app = express()

const tasks = require('./routes/task')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// middleware
app.use(express.static('./public'));
app.use(express.json());


// routes
app.use('/api/v1/tasks', tasks);


app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5001

const start = async () => {

    try{
        const connectingString = `${process.env.method}://${process.env.dbHost}:${process.env.password}@${process.env.projectName}.${process.env.instanceName}/${process.env.dbName}?retryWrites=true&w=majority`;
        await connectDB(connectingString);
        app.listen(port, ()=>{
            console.log(`Server is listening on port ${port}....`)
        })
    }catch(err){
        console.log(`Error ${err}`)
    }
}

start();