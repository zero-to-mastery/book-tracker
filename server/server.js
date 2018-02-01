require('./config/config');
const flash = require('connect-flash');
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const mongoose = require('./config/mongoose');
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');

const User = require('./models/User');
const overrideMethod = require('./middleware/override-method');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT
const app = express();

require('./config/passport')(passport);

// HANDLEBARS HELPERS
const hbHelpers = require('./helpers/hbsHelpers');
// MIDDLEWARE
const globalVars = require('./middleware/global-variables');
// BODY PARSER
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// EXPRESS SESSION
app.use(session({
   secret: 'secret',
   resave: false,
   saveUninitialized: true,
}))
// PASSPORT
app.use(passport.initialize());
app.use(passport.session());
// Connect Flash
app.use(flash());
// Global Variables
app.use(globalVars)
// OVERIDE METHOD
app.use(overrideMethod);

// HANDLEBARS CONFIG
app.engine('handlebars', exphbs({ 
   helpers: {
      numberOfBooks: hbHelpers.numberOfBooks,
      select: hbHelpers.select
   },
   defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// MIDDLEWARE
app.use(express.static(publicPath));

// LOAD ROUTES
const index = require('./routes/index');
const user = require('./routes/user');
const books = require('./routes/books');

// USE ROUTES
app.use('/', index);
app.use('/user', user);
app.use('/books', books);

app.listen(port, () => {
   console.log(`Server running on port ${port}`);
})