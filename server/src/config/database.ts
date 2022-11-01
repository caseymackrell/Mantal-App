export default{
    port: 3000,
    host: 'local',
    dbUri: 'mongodb://localhost:3000/'
}



import mongoose from 'mongoose'


const URI = process.env.MONGODB_URI


mongoose.connect('URI')