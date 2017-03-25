var mongoose = require( 'mongoose' ),
    express  = require( 'express' ),
    bp       = require( 'body-parser' ),
    path     = require( 'path' ),
    PORT     = 8000,
    app      = express(),
    session = require( 'express-session' )

app.use(express.static(path.join(__dirname, "./client")))
app.use(express.static(path.join(__dirname, "./node_modules")))
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}))
app.use(bp.json())

require('./server/config/mongoose.js')
require('./server/config/routes.js')(app)

app.listen(PORT, function(){
console.log(10,`listening on port ${PORT}`)
})
