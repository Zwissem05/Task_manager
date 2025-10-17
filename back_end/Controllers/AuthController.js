import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
import bcrypt from 'bcryptjs'
import { configDotenv } from "dotenv";
import jwt from 'jsonwebtoken'
import transporter from '../config/nodemailer.js'


configDotenv()
export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body
        if (!name || !email || !password)
            return res.status(422).json({ error: "Missing Information" });

        if (await prisma.user.findUnique({ where: { email: email } }))
            return res.status(422).json({ error: `${email} does already exists` });

        const salt = await bcrypt.genSalt(10)
        const hashedCode = await bcrypt.hash(password, salt)

        const user = await prisma.user.create({
            data: {
                name: name,
                email: email,
                password: hashedCode,
            }
        })
        //Generating the token
        const token = jwt.sign({ _id: user._id }, process.env.Jwt_Token, { expiresIn: '7d' });
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV == 'production',
            sameSite: process.env.NODE_ENV == 'production' ? 'none' : 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000,

        })

         // Sending the email
        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: user.email,
            subject: "Welcome",
            text: ` Dear ${name} 
            Welcome to Our App 'Task Manager'`
        };

        await transporter.sendMail(mailOptions);
        return res.status(201).json(user)
    }


    catch (error) {
        return res.status(500).json({ error: error.message });

    }


}


export const login = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password)
            return res.status(422).json({ error: "Missing Information" });
        const user = await prisma.user.findUnique({ where: { email: email } })
        if (!user)
            return res.status(422).json({ error: `${email} does not exists` });


        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch)
            return res.json({ success: false, message: 'Email or password Invalid' })
        //giving the token
        const token = jwt.sign({ _id: user._id }, process.env.Jwt_Token)
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV == 'production',
            sameSite: process.env.NODE_ENV == 'production' ? 'none' : 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000
        })
        res.json({ success: true, message: 'logged succifully' })
    }


    catch (error) {
        return res.status(500).json({ error: error.message });

    }


}

// Function to send Reset Otp
export const send_Reset_Otp = async (req, res) => {
    const { email } = req.body;
    
    if (!email) {
        return res.status(400).json({ success: false, message: 'Email is required' });
    }
    
    try {
        const user = await prisma.user.findUnique({ where: { email: email } });
        
        if (!user) {
            return res.status(400).json({ success: false, message: 'User not found' });
        }

        const otp = String(Math.floor(100000 + Math.random() * 900000));
        
        // CORRECTION: Utiliser Prisma pour mettre à jour l'utilisateur
        await prisma.user.update({
            where: { email: email },
            data: {
                ResetOtp: otp,
                ResetOtpExpiresAt: new Date(Date.now() + 15 * 60 * 1000)
            }
        });

        // Sending the OTP password
        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: user.email,
            subject: "OTP Reset Password",
            text: `Welcome to Our App "Task Manager"!!!
Your OTP reset password is: ${otp}`
        };

        await transporter.sendMail(mailOptions);

        return res.json({ success: true, message: 'Reset OTP sent successfully!' });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ success: false, message: err.message});
    }
}

// Function to verify the OTP reset password
export const verify_resetOtp = async (req, res) => {
    const { email, resetOtp, newPassword } = req.body;
    
    if (!email) {
        return res.status(400).json({ success: false, message: 'Missing Information: email' });
    }
    if (!resetOtp) {
        return res.status(400).json({ success: false, message: 'Missing Information: OTP' });
    }
    if (!newPassword) {
        return res.status(400).json({ success: false, message: 'Missing Information: password' });
    }

    try {
        const user = await prisma.user.findUnique({ where: { email: email } });
        
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        // CORRECTION: Vérifier si l'OTP existe et correspond
        if (!user.ResetOtp || user.ResetOtp !== resetOtp) {
            console.log('Expected:', user.ResetOtp, 'Received:', resetOtp);
            return res.status(400).json({ success: false, message: 'Reset OTP invalid' });
        }

        // CORRECTION: Vérifier la date d'expiration
        if (user.ResetOtpExpiresAt < new Date()) {
            return res.status(400).json({ success: false, message: 'Reset OTP expired. Try Again!' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);

        // CORRECTION: Utiliser Prisma pour mettre à jour le mot de passe
        await prisma.user.update({
            where: { email: email },
            data: {
                password: hashedPassword,
                ResetOtp: null, // ou '' selon votre schéma
                ResetOtpExpiresAt: null
            }
        });

        return res.json({ success: true, message: 'Password reset successfully!' });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ success: false, message: err.message });
    }
}