import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config(); // doit être avant tout accès à process.env

// Transporteur SMTP (Gmail par exemple)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SENDER_EMAIL,
    pass: process.env.Nodemailer_Token, // mot de passe d'application Gmail
  },
});
export default transporter