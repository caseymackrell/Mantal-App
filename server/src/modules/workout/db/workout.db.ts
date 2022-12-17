import mongoose, { Schema, Types } from 'mongoose'
import { UserDocument } from '../../user/db/user.db'

export interface ExerciseType extends mongoose.Document{
    name: string
    _id: string
    musclesTargeted: Types.Array<string>
    level: string
    equipment: string
}

export interface WorkoutSetType extends mongoose.Document {
    exercise: Schema.Types.ObjectId
    reps: number
    weightPercent: number
}

export interface WorkoutGroupType extends mongoose.Document{
    group: Types.Array<Schema.Types.ObjectId>
}

export interface WorkoutDocument extends mongoose.Document {
    _id: string
    createdAt: Date;
    updatedAt: Date;
    user: UserDocument;
    workoutName: string
    workoutDiscription: string
    musclesTargeted: string
    workoutLevel: string
    workoutType: string
    workout: Types.Array<Schema.Types.ObjectId>;
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

const WorkoutSetSchema = new mongoose.Schema({
	exercise: { type: Schema.Types.ObjectId,
		ref: 'Exercise',
		required: true },
	reps: { type: Number,
		required: true },
	weightPercent: { type: Number,
		required: true },
})

export const WorkoutSet = mongoose.model<WorkoutSetType>('WorkoutSet', WorkoutSetSchema)

const WorkoutGroupSchema = new mongoose.Schema({
	exercise: { type: String },
	group: { type: [Schema.Types.ObjectId],
		ref: 'WorkoutSet',
		required: true },
})

export const WorkoutGroup = mongoose.model('WorkoutGroup', WorkoutGroupSchema)

const WorkoutSchema = new mongoose.Schema({
	_id: { type: mongoose.Types.ObjectId, required: true, auto: true },
	workoutName: { type: String, required: true },
	workoutDiscription: { type: String },
	musclesTargeted: { type: String },
	workoutLevel: { type: String, enum: ['beginner', 'intermediate', 'advanced'] },
	workoutType: { type: String },
	user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
	workout: { type: [Schema.Types.ObjectId],
		ref: 'WorkoutGroup',
		required: true },
}, {
	timestamps: true,
})

export const Workout = mongoose.model<WorkoutDocument>('WorkoutPost', WorkoutSchema)
