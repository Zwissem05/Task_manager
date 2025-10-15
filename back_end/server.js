import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import { configDotenv } from 'dotenv';
import  autroute from './Routes/AuthRoute.js'

configDotenv(); // ✅ Exécution correcte

const app = express();
const PORT = 3500;

// ✅ Middleware de base
app.use(express.json());
app.use(cookieParser());

// ✅ Autoriser ton frontend React
app.use(cors({
  origin: 'http://localhost:5173', // ✅ frontend exact

  credentials: true // ✅ très important pour permettre les cookies
}));



// ✅ Routes
app.use('/auth',autroute)

// ✅ Lancement du serveur
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
