import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
import bcrypt from 'bcryptjs'
import { configDotenv } from "dotenv";
import jwt from 'jsonwebtoken'

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





