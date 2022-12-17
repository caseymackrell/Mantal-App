import mongoose from 'mongoose'
import { WorkoutDocument } from '../../workout/db/workout2.db'

export interface UserDocument extends mongoose.Document {
    _id: string
    username: string;
    phone: string;
    lastLogin: Date;
    createdAt: Date;
    updatedAt: Date;
    workouts: WorkoutDocument;
}

const userSchema = new mongoose.Schema({
	_id: { type: mongoose.Types.ObjectId, required: true, auto: true },
	username: { type: String, required: true, unique: true, lowercase: true },
	phone: { type: String, required: true, index: true, unique: true },
	workouts: [

		{ type: mongoose.Schema.Types.ObjectId, ref: 'WorkoutPost' },
	],
	comments: [
		{ type: mongoose.Schema.Types.ObjectId, ref: 'WorkoutPost' },
	],
	lastLogin: { type: Date, required: true },
}, {
	timestamps: true,
})

const UserModel = mongoose.model<UserDocument>('User', userSchema)

export default UserModel
