const mongoose = require('mongoose');
const logger = require('../logger/api.logger');
require('dotenv').config({path: './.env'});

const connect = () => {

    const url = 'mongodb+srv://Tester123:51FWAl9CFZuJe9xF@todo-cluster.dc3nz.mongodb.net/todos?retryWrites=true&w=majority';


    mongoose.connect(url, {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })

    mongoose.connection.once("open", async () => {
        logger.info("Connected to database");
    });
      
    mongoose.connection.on("error", (err) => {
        logger.error("Error connecting to database  ", err);
    });
}

const disconnect = () => {
    
    if (!mongoose.connection) {
      return;
    }
    
    mongoose.disconnect();

    mongoose.once("close", async () => {
        console.log("Diconnected  to database");
    });

};

module.exports = {
    connect,
    disconnect
}