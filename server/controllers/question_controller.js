var mongoose = require('mongoose')
var Question = mongoose.model('Question')
var User = mongoose.model('User')

module.exports = (function(){
  return {
    create: function(req, res){
      var user_id = req.session.user._id
      var user_name = req.session.user.name
      var newQuestion = new Question({
        title : req.body.title,
        optionOne : req.body.optionOne,
        optionTwo : req.body.optionTwo,
        optionThree : req.body.optionThree,
        optionFour : req.body.optionFour,
        date_added : new Date()
      })
      newQuestion._user = user_id
      newQuestion.created_by = user_name
      newQuestion.save(function(err,data){
        if(err){
          console.log(err)
        }else{
          User.update({_id:user_id}, {$push: {'items':newQuestion}}, function(err){

          })
          console.log(newQuestion,": New Question added")
          res.json(data)
        }
      })
    },

    show: function(req,res){
      Question.find({}, function(err, question){
        res.json(question)
      })
    },

    showone: function(req,res){
      var id = req.params.id;
      Question.findById(id, function(err, question) {
          if(err){
              console.log(err);
          } else {
              console.log(question);
              res.json(question);
          }
      })
    },

    delete: function(req,res){
      Question.remove({_id: req.params.id}, function(err,question){
        if(err){
          console.log(err)
        }else{
          res.json(question)
        }
      })
    },

    vote_one: function(req, res){
      var id = req.params.id;
      Question.findById(id, function(err, question){
        question.optionOne_vote += 1
        question.save()
        res.json(question)
      })
    },
    vote_two: function(req, res){
      var id = req.params.id;
      Question.findById(id, function(err, question){
        question.optionTwo_vote += 1
        question.save()
        res.json(question)
      })
    },
    vote_three: function(req, res){
      var id = req.params.id;
      Question.findById(id, function(err, question){
        question.optionThree_vote += 1
        question.save()
        res.json(question)
      })
    },
    vote_four: function(req, res){
      var id = req.params.id;
      Question.findById(id, function(err, question){
        question.optionFour_vote += 1
        question.save()
        res.json(question)
      })
    }
  }
})()
