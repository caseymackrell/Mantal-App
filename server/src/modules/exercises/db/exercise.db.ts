import mongoose from 'mongoose'

export interface ExerciseType extends mongoose.Document{
    name: string
    _id: string
    musclesTargeted: string
    level: string
    equipment: string
}

const ExerciseSchema = new mongoose.Schema({
	_id: { type: mongoose.Types.ObjectId,
		required: true,
		auto: true },
	name: { type: String, required: true },
	musclesTargeted: [{ type: String, required: true }],
	level: { type: String, required: true },
	equipment: { type: String, required: true },

})

export const Exercise = mongoose.model<ExerciseType>('Exercise', ExerciseSchema)
