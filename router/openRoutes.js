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
    userActive:false,
    appName
  });
})
router.get('/gallery', async (req, res) => {
  res.render('gallery', {
    pageTitle: `gallery`,
    userActive:false,
    appName
  });
})
router.get('/trip-details', async (req, res) => {
  res.render('trip-details', {
    pageTitle: `Welcome to ${appName}`,
    userActive:false,
    appName
  });
})


router.get('/abouts',  (req, res) => {

  res.render('abouts', {
    pageTitle: `Welcome to ${appName}`,
    userActive:false,
    appName,
  });
})

router.get('/terms',  (req, res) => {

  res.render('terms', {
    pageTitle: `Welcome to ${appName}`,
    userActive:false,
    appName,
  });
})

router.get('/policy',  (req, res) => {

  res.render('policy', {
    pageTitle: `Welcome to ${appName}`,
    userActive:false,
    appName,
  });
})


router.get('/login',forwardAuthenticated,  (req, res) => {

  res.render('login', {
    pageTitle: `login`,
    userActive:false,
    appName
  });
})

router.get('/register-ibeno',forwardAuthenticated,  (req, res) => {

  res.render('register-ibeno', {
    pageTitle: `register-ibeno`,
    userActive:false,
    appName
  });
})



module.exports = router;