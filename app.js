const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const session = require('express-session');
const app = express()
const flash = require('connect-flash');
const methodOverride = require('method-override');
const ejsLayouts = require('express-ejs-layouts');
const passport = require('./config/passport');

const PORT = 3000


if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
    console.log('using local env...');
  }

  
  // Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Set up EJS view engine and public folder
app.set('view engine', 'ejs');
app.use(ejsLayouts);

app.use(express.static(path.join(__dirname, './', 'public')));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 24 * 60 * 60 * 1000 }
  }));
  
  app.use(passport.initialize());
  app.use(passport.session());
  
  app.use(flash());
  
  app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.warning_msg = req.flash('warning_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
  });
  
  app.use(methodOverride((req, res) => {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      let method = req.body._method;
      delete req.body._method;
      return method;
    }
  }));




  const openRoutes = require('./router/openRoutes')
  app.use('/', openRoutes);

  // Handle when the user clicks "Later" or visits the Black Friday page
app.post('/dismiss-modal', (req, res) => {
    // Set the session flag to indicate the modal has been dismissed
    req.session.blackFridayShown = true;
    res.redirect('/');
  });
  

  // 404 Error handler for undefined routes
app.use((req, res) => {

    res.render('404', {
      pageTitle: `404`,
    });
  });
  
  // General error handling middleware
  app.use((err, req, res, next) => {
    console.log(err);
    let userActive = req.user ? true : false;
    res.redirect('/')
  });


  // Start server

if (process.env.NODE_ENV === 'production') {
    app.listen();
    console.log(`Server is live`);
}else{

    app.listen(PORT, () => {
      console.log(`developemnet mode ....`);
    console.log(`Server is running on port ${PORT}`);
  });
  
  }