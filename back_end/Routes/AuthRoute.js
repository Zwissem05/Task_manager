import { Router } from "express";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";


const router = Router();


passport.use(new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL,
  },
  (accessToken, refreshToken, profile, done) => {
    console.log("Profil Google :", profile);
    return done(null, profile);
  }
));

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

// 🟢 Étape 1 : Démarrer la connexion avec Google
router.get(
  "/",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// 🟢 Étape 2 : Callback après connexion
router.get(
  "/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.send(`<h1>Bienvenue ${req.user.displayName} 😄</h1>`);
  }
);




export default router;
