import Router from 'express'
import {login,  register, send_Reset_Otp, verify_resetOtp } from '../Controllers/AuthController.js'
import AuthRou from './GoogleAuthRoute.js';
import transporter from '../config/nodemailer.js'


const router = Router();

router.get('/',(req,res) => {
    res.send('welcome')
})
router.use('/google',AuthRou)
router.post('/register',register)
router.post('/login',login)
router.post('/send-resetOtp',send_Reset_Otp)
router.post('/verify-resetOtp',verify_resetOtp)




export default router

