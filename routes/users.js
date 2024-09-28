const mongoose = require('mongoose');
const plm=require('passport-local-mongoose'); 

mongoose.connect("mongodb://127.0.0.1:27017/pinterest");
// Define the schema for the User
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,

  },
  password: {
    type: String
   
  },
  posts: [{
    type:mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  }],
  dp: {
    type: String, 
    
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  fullname: {
    type: String,
    required: true,
  
  }

});

userSchema.plugin(plm);

// Create the model using the schema
module.exports  = mongoose.model('User', userSchema);


