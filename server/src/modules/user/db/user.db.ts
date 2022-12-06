import mongoose from 'mongoose'

export interface UserDocument extends mongoose.Document {
    _id: string
    username: string;
    phone: string;
    lastLogin: Date;
    createdAt: Date;
    updatedAt: Date;
}

const userSchema = new mongoose.Schema({
	_id: { type: mongoose.Types.ObjectId, required: true, auto: true },
	username: { type: String, required: false, unique: true, lowercase: true },
	phone: { type: String, required: true, index: true, unique: true },
	lastLogin: { type: Date, required: true },
}, {
	timestamps: true,
})

const UserModel = mongoose.model<UserDocument>('User', userSchema)

export default UserModel
