import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import passport from 'passport';
import { configDotenv } from 'dotenv';
import { Register } from './Controllers/UserController.js';
import AuthRou from './Routes/AuthRoute.js';

configDotenv(); // ✅ Exécution correcte

const app = express();
const PORT = 3500;

// ✅ Middleware de base
app.use(express.json());
app.use(cookieParser());

// ✅ Autoriser ton frontend React
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

// ✅ Session (obligatoire pour Passport)
app.use(session({
  secret: process.env.SESSION_SECRET || 'ma_super_cle_secrete',
  resave: false,
  saveUninitialized: false
}));

// ✅ Initialisation Passport
app.use(passport.initialize());
app.use(passport.session());

// ✅ Routes
app.use('/auth/google', AuthRou);

// ✅ Lancement du serveur
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
