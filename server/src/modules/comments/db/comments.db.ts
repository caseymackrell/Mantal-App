import mongoose from 'mongoose'

export interface CommentDocument extends mongoose.Document {
    _id: string
    user: string;
    message: string;
}
const commentSchema = new mongoose.Schema({
	_id: { type: mongoose.Types.ObjectId, required: true, auto: true },
	user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
	message: { type: String, required: true, index: true, unique: true },
})

const Comment = mongoose.model<CommentDocument>('Comment', commentSchema)

export default Comment
