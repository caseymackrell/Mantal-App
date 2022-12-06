import twilio from 'twilio'

export const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)

export const twilioVerifyClient = twilioClient.verify.v2.services(process.env.TWILIO_VERIFY_SID as string)
