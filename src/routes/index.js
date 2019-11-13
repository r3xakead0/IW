import passport from "passport";
import { Router } from "express";
import { isLoggedIn } from "../lib/auth";

const router = Router();

router.get('/', async (req, res) => {
    res.render('index');
});

router.get('/signin', (req, res) => {
    res.render('auth/signin');
});

router.post('/signin', (req, res, next) => {
    passport.authenticate('local.signin', {
        successRedirect: '/profile',
        failureRedirect: '/signin',
        failureFlash: true
    })(req, res, next);
});

router.get('/logout', (req, res) => {
    req.logOut();
    res.redirect('/');
});

router.get('/profile', isLoggedIn, (req, res) => {
    res.render('profile');
});

export default router;