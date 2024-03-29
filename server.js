const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('express-flash')
const logger = require('morgan')
const connectDB = require('./config/database')
const mainRoutes = require('./routes/main')
var bodyParser = require('body-parser');
// const todoRoutes = require('./routes/todos')
// const showUserRoutes = require('./routes/showuser')
// const adminRoutes = require('./routes/admin')

require('dotenv').config({path: './config/.env'})

// Passport config
require('./config/passport')(passport)

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//adds it to the app, so it can decode the form

// Sessions
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  )
  
// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())
  // Main Route
app.use('/', mainRoutes)
// app.use('/todos', todoRoutes)
// app.use('/showuser', showUserRoutes)
// app.use('/admin', adminRoutes)
 
app.listen(process.env.PORT, ()=>{
    console.log('Server is running on localhost: 2222, you better catch it!')
})    