import { authenticator } from 'otplib';
import dotenv from 'dotenv';
import clipboard from 'clipboardy';

dotenv.config();

const secret = process.env.SECRET;

const otp = authenticator.generate(secret);
clipboard.writeSync(otp);
console.log('OTP:', otp);

const isValid = authenticator.check(otp, secret);
console.log('OTP valid:', isValid);
