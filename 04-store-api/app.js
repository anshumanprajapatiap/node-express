express = require('express')
app = express()
const connectDB = require('./db/connect')
const products = require('./routes/products')
require('dotenv').config()
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// middleware
app.use(express.json());
app.use(notFound);
app.use(errorHandlerMiddleware);

// routes
app.use('/api/v1/products', products);

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