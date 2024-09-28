const mongoose = require('mongoose');

// Define the schema for the Post
const postSchema = new mongoose.Schema({
  postText: {
    type: String,
    required: true,
     },
  user:{
      type:mongoose.Schema.Types.ObjectId, 
      ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically sets the current date
  
  },
 
  likes: {
    type: Array,
    default: [], // Default value is 0 likes
  },
 
});

// Create the model using the schema
module.exports = mongoose.model('Post', postSchema);


