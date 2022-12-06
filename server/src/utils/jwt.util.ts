/* eslint-disable no-unused-vars */
import * as jwt from 'jsonwebtoken'

export const JWT_SECRETS: Record<TokenTypes, string> = {
	auth: process.env.JWT_SECRET || '',
}

export enum TokenTypes {
	AUTH = 'auth',
}

/**
 * Given a JWT token, returns the decoded token or throws if the token is not valid.
 */
export const decodeJwtToken = async (
	token: string,
	type: TokenTypes,
): Promise<any> => new Promise((resolve, reject) => {
	jwt.verify(token, JWT_SECRETS[type], async (error: Error | null, decodedToken: any) => {
		if (error) {
			return reject(new Error('Invalid or expired token'))
		}
		return resolve(decodedToken)
	})
})

/**
 * Given an object and a type of secret, generate a JWT token.
 */
export const encodeJwtToken = async (
	data: object | any,
	type: TokenTypes,
	options: object = {},
): Promise<string> => new Promise((resolve, reject) => {
	jwt.sign(data, JWT_SECRETS[type], options, async (error: Error | null, token: any) => {
		if (error) {
			return reject(error)
		}
		return resolve(token)
	})
})
