import mongoose from "mongoose";
import { UserDocument } from "./user.model";

export interface SessionDocument extends mongoose.Document {
    user: UserDocument['_id'];
    valid: string;
    userAgent: string;
    createdAt: Date;
    updatedAt: Date;
}


const sessionSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    valid: { type: Boolean, default: true },
    userAgent: { type: String}
    
},{
    timestamps: true
}
);



const sessionModel = mongoose.model<SessionDocument>("Session", sessionSchema)

export default sessionModel;