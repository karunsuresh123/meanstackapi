const mongoose = require('mongoose');
const logger = require('../logger/api.logger');
require('dotenv').config({ path: './.env' });

const connect = () => {
    if (process.env.ENVIRONMENT === 'test') {
        return;
    }

    const url = process.env.DB_URL;
    //logger.info("MongoDB URL is : " + process.env.DB_URL);

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
    if (process.env.ENVIRONMENT === 'test') {
        return;
    }

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