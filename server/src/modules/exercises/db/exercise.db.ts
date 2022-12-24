import mongoose from 'mongoose'

export interface ExerciseType extends mongoose.Document{
    _id: string
	exerciseName: string
    muscleGroup: string
    level: string
    equipment: string
}

const ExerciseSchema = new mongoose.Schema({
	_id: { type: mongoose.Types.ObjectId,
		required: true,
		auto: true },
	exerciseName: { type: String, required: true },
	muscleGroup: { type: String, required: true },
	level: { type: String, required: true },
	equipment: { type: String, required: true },

})

export const Exercise = mongoose.model<ExerciseType>('Exercise', ExerciseSchema)
