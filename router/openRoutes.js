const express = require('express')
// const path = require('path')
const db = require("../config/databaseTable");
const { promisify } = require('util');
const query = promisify(db.query).bind(db);
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');


let appName = "x-plore rage"





// Welcome Page
router.get('/', async (req, res) => {
  res.render('index', {
    pageTitle: `Welcome to ${appName}`,
  });
})


router.get('/prizes',  (req, res) => {

  res.render('prizes', {
    pageTitle: `Welcome to ${appName}`,
    appName,
  });
})

router.get('/contact',  (req, res) => {
  res.render('contact', {
    pageTitle: `Welcome to ${appName}`,
    appName
  });
})



router.get('/login',forwardAuthenticated,  (req, res) => {

  res.render('login', {
    pageTitle: `login`,
    appName
  });
})

router.get('/register',forwardAuthenticated,  (req, res) => {

  res.render('register', {
    pageTitle: `login`,
    appName
  });
})



module.exports = router;