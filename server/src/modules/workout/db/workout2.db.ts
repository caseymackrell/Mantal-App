import mongoose, { Types } from 'mongoose'
import { string } from 'zod'
// import { ExerciseType } from '../../exercises/db/exercise.db'
import { UserDocument } from '../../user/db/user.db'

export interface WorkoutDocument extends mongoose.Document {
    push(newWorkout: WorkoutDocument & Required<{ _id: string; }>): unknown;
    _id: Types.ObjectId
    createdAt: Date;
    updatedAt: Date;
    user: UserDocument;
    workoutName: string
    workoutDiscription: string
    musclesTargeted: string
    workoutLevel: string
    workoutType: string
    workout: string|number|Array<string>;
	exercise: string
	recipient: string
}

const WorkoutSchema = new mongoose.Schema({
	_id: { type: mongoose.Types.ObjectId, required: true, auto: true },
	type: { type: String, enum: ['post', 'scheduled'], required: true },
	workoutName: { type: String, required: true },
	workoutDiscription: { type: String },
	musclesTargeted: { type: String },
	workoutLevel: { type: String, enum: ['beginner', 'intermediate', 'advanced'] },
	workoutType: { type: String },
	user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
	scheduledDate: {
		type: Date,
		validate: function(value: any, doc: { type: string; }) {
			if (doc.type === 'scheduled' && !value) {
				throw new Error('Scheduled date is required for scheduled workout')
			}
			return true
		},
		recipient: {
			type: String,
			validate: function(value: any, doc: { type: string; }) {
				if (doc.type === 'scheduled' && !value) {
					throw new Error('Recipient is required for scheduled workout')
				}
				return true
			},
		},
	},
	workout: {
		group: [
			{
				exercises: [
					{
						exercise: {
							type: String,
						},
						sets: [
							{
								setNum: { type: Number, required: true },
								reps: { type: Number, required: true },
								weight: { type: Number, required: true },
							},
						],
					},
				],
			},
		],
	},
}, {
	timestamps: true,
})

export const Workout = mongoose.model<WorkoutDocument>('WorkoutPost', WorkoutSchema)
