var mongoose = require('mongoose')
// console.log(mongoose)
var Schema = mongoose.Schema
var UserSchema = new Schema({
  name : {type:String, required: true, maxlength:15, minlength:4},
  items : [{type: mongoose.Schema.Types.ObjectId, ref: "Item"}]
},{timestamp : true})

mongoose.model('User', UserSchema)
