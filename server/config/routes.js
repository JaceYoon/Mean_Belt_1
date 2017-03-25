var session = require('./../controllers/user_controller.js')
var questionsession = require('./../controllers/question_controller.js')
module.exports = function(app){
  app.post('/login', function(req, res){
    session.login(req, res)
  })

  app.get('/getuser', function(req, res){
    session.getUser(req, res)
  })

  app.get('/logout', function(req, res){
    session.logOut(req, res)
  })

  app.post('/create', function(req, res){
    questionsession.create(req, res)
  })

  app.get('/getquestions', function(req, res){
    questionsession.show(req, res)
  })

  app.get('/show/:id', function(req, res){
    questionsession.showone(req, res)
  })

  app.get('/delete/:id', function(req, res){
    questionsession.delete(req, res)
  })

  app.post('/vote_one/:id', function(req, res){
    questionsession.vote_one(req, res);
  })

  app.post('/vote_two/:id', function(req, res){
    questionsession.vote_two(req, res);
  })

  app.post('/vote_three/:id', function(req, res){
    questionsession.vote_three(req, res);
  })

  app.post('/vote_four/:id', function(req, res){
    questionsession.vote_four(req, res);
  })
  
}
