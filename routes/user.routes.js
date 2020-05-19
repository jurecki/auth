const express = require('express');
const router = express.Router();

router.get('/logged', (req, res) => {

    req.user === undefined ? res.redirect('/') : res.render('logged', { name: req.user.displayName, source: req.user.photos[0].value });
});

router.get('/no-permission', (req, res) => {
    res.render('noPermission');
});

router.get('/profile', (req, res) => {
    req.user === undefined ? res.redirect('/') : res.render('profile');
});

router.get('/profile/settings', (req, res) => {
    req.user === undefined ? res.redirect('/') : res.render('settings');
});


module.exports = router;