import { Router } from "express";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";

configDotenv();
const prisma = new PrismaClient();
const router = Router();

// Stratégie Google pour SIGN IN
passport.use('google-signin', new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_SIGNIN, // URL différente pour signin
    passReqToCallback: true
}, async (req, accessToken, refreshToken, profile, done) => {
    try {
        // Vérifie si l'utilisateur existe
        let user = await prisma.user.findUnique({
            where: { email: profile.emails[0].value }
        });

        if (!user) {
            // Utilisateur non trouvé → rediriger vers signup
            return done(null, false, {
                message: 'USER_NOT_FOUND',
                email: profile.emails[0].value,
                name: profile.displayName
            });
        }

        // Utilisateur trouvé → connexion réussie
        return done(null, user);

    } catch (err) {
        return done(err, null);
    }
}));

// Stratégie Google pour SIGN UP
passport.use('google-signup', new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_SIGNUP, // URL différente pour signup
    passReqToCallback: true
}, async (req, accessToken, refreshToken, profile, done) => {
    try {
        // Vérifie si l'utilisateur existe déjà
        let user = await prisma.user.findUnique({
            where: { email: profile.emails[0].value }
        });

        if (user) {
            // Utilisateur existe déjà → rediriger vers signin
            return done(null, false, {
                message: 'USER_ALREADY_EXISTS',
                email: profile.emails[0].value
            });
        }

        // Créer nouvel utilisateur
        user = await prisma.user.create({
            data: {
                name: profile.displayName,
                email: profile.emails[0].value,
                password: "", // OAuth user
                ResetOtp:"",
            }
        });

        return done(null, user);

    } catch (err) {
        return done(err, null);
    }
}));

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

// 🟢 ROUTES POUR SIGN IN
router.get("/signin", passport.authenticate("google-signin", {
    scope: ["profile", "email"]
}));

router.get("/signin/callback", (req, res, next) => {
    passport.authenticate("google-signin", (err, user, info) => {
        if (err) {
  console.log("Google Auth Error:", err);
            return res.redirect(process.env.FRONTEND_URL + "/signin?error=auth_failed");
        }

        if (!user) {
            // Rediriger vers signup avec les infos du compte Google
                        console.log(info.message);

            if (info.message === 'USER_NOT_FOUND') {
                const params = new URLSearchParams({
                    email: info.email,
                    name: info.name,
                    source: 'google'
                });
        return res.redirect(process.env.FRONTEND_URL + "/signingup?" + params.toString());
            }
            return res.redirect(process.env.FRONTEND_URL + "/signin?error=unknown");
        }

        // Connexion réussie
        const token = jwt.sign(
            { id: user.id },
            process.env.Jwt_Token,
            { expiresIn: '7d' }
        );

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production"
        });

        res.redirect(process.env.FRONTEND_URL + "/");
    })(req, res, next);
});

// 🟢 ROUTES POUR SIGN UP
router.get("/signup", passport.authenticate("google-signup", {
    scope: ["profile", "email"]
}));

router.get("/signup/callback", (req, res, next) => {
    passport.authenticate("google-signup", (err, user, info) => {
        if (err) {
              console.log("Google Auth Error:", err);

            return res.redirect(process.env.FRONTEND_URL + "/signup?error=auth_failed");
        }

        if (!user) {
            // Rediriger vers signin si le compte existe déjà
            if (info.message === 'USER_ALREADY_EXISTS') {
                          const params = new URLSearchParams({
                    email: info.email,
                    name: info.name,
                    source: 'google'
                });
                return res.redirect(process.env.FRONTEND_URL + "/signing?" + params.toString());
            }
            return res.redirect(process.env.FRONTEND_URL + "/signup?error=unknown");
        }

        // Inscription réussie
        const token = jwt.sign(
            { id: user.id },
            process.env.Jwt_Token,
            { expiresIn: '7d' }
        );

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production"
        });

        res.redirect(process.env.FRONTEND_URL + "/");
    })(req, res, next);
});

export default router;