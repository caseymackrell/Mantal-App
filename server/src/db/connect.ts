import mongoose from "mongoose";
import config from "config";
import log from '../logger/indexLogger'
import dotenv from 'dotenv';

const URI = process.env.MONGODB_URI
function connect(){
    

return mongoose
    .connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        log.info("Database connected");
    })
    .catch((e) => {
        log.info("db error", e)
        process.exit(1);
    })
}

export default connect;