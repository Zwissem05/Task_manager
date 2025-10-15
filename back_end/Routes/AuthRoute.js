import Router from 'express'
import {login,  register } from '../Controllers/AuthController.js'
import AuthRou from './GoogleAuthRoute.js';

const router = Router();

router.get('/',(req,res) => {
    res.send('welcome')
})
router.use('/google',AuthRou)
router.post('/register',register)
router.post('/login',login)



export default router

