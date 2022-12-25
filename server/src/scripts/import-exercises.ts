require('dotenv').config()
import { Exercise } from '../modules/exercises/db/exercise.db'
import connectToDatabase from '../services/db'

const exercises = require('../../../exercises.json');

(async () => {
	await connectToDatabase()
	const originTime = Date.now()
	console.log('Connected to database. Inserting records...')
	const { insertedCount } = await Exercise.collection.insertMany(exercises)
	console.log(`Inserted ${insertedCount} records in ${Date.now() - originTime}ms.`)
	process.exit()
})()
