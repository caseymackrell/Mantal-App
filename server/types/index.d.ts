import { Request } from 'express'
import UserModel from '../src/modules/user/db/user.db'

export interface AuthenticatedRequest extends Request {
	user: UserModel
}
