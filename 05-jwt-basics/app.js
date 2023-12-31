console.log('JWT Application start')
require('dotenv').config()
require('express-async-errors');

const express = require('express')
const app = express()

const mainRouter = require('./routes/main');
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');


// middleware
app.use(express.static('./public'));
app.use(express.json());


app.use('/api/v1', mainRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);


const port =  process.env.PORT || 5001;
const start = async () => {

    try{
        const connectingString = `${process.env.method}://${process.env.dbHost}:${process.env.password}@${process.env.projectName}.${process.env.instanceName}/${process.env.dbName}?retryWrites=true&w=majority`;
        // await connectDB(connectingString);
        app.listen(port, ()=>{
            console.log(`Server is listening on port ${port}....`)
        })
    }catch(err){
        console.log(`Error ${err}`)
    }
}

start();