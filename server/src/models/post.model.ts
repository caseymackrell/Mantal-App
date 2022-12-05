import mongoose from "mongoose";
import { string } from "zod";
import { UserDocument } from "./user.model";
import { v4 } from 'uuid'

export interface postDocument extends mongoose.Document {
    user: UserDocument['_id'];
    image: string
    description: string
    createdAt: Date
    updatedAt: Date
}


const postSchema = new mongoose.Schema({
    postId: {
        type: String,
        required: true,
        unique: true,
        default: () => `post_${v4()}`
    },
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    },
    image: {
        type: String,
        required: true

    },
    description: {
        type: String,
        required: true
    },

    
},{
    timestamps: true
}
);



const postModel = mongoose.model<postDocument>("Post", postSchema)

export default postModel;