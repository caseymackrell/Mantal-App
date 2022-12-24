import { Request } from 'express'
import { UserDocument } from '../src/modules/user/db/user.db'

export interface AuthenticatedRequest extends Request {
	user: UserDocument
}
