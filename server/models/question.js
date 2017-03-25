var mongoose = require('mongoose')
// console.log(mongoose)
var Schema = mongoose.Schema
var QuestionSchema = new Schema({
  title : {type:String, required: true, maxlength:30, minlength:8},
  optionOne : {type:String, required: true, minlength:3},
  optionTwo : {type:String, required: true, minlength:3},
  optionThree : {type:String, required: true, minlength:3},
  optionFour : {type:String, required: true, minlength:3},
  optionOne_vote : {type: Number, default: 0},
  optionTwo_vote : {type: Number, default: 0},
  optionThree_vote : {type: Number, default: 0},
  optionFour_vote : {type: Number, default: 0},
  created_by : {type:String, ref:"UserName"},
  date_added : {type:Date},
  _user : [{type: mongoose.Schema.Types.ObjectId, ref: "User"}]
},{timestamp : true})

mongoose.model('Question', QuestionSchema)
