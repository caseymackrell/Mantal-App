import mongoose, { Types } from 'mongoose'
import { ExerciseType } from '../../exercises/db/exercise.db'
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
	exercise: ExerciseType
}

const WorkoutSchema = new mongoose.Schema({
	_id: { type: mongoose.Types.ObjectId, required: true, auto: true },
	workoutName: { type: String, required: true },
	workoutDiscription: { type: String },
	musclesTargeted: { type: String },
	workoutLevel: { type: String, enum: ['beginner', 'intermediate', 'advanced'] },
	workoutType: { type: String },
	user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
	workout: {
		group: [
			{
				exercises: [
					{
						exercise: {
							type: mongoose.Schema.Types.ObjectId,
							ref: 'Exercise',
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
