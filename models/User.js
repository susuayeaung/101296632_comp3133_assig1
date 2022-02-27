const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please enter username'],
    unique: [true, "Duplicate Email Not allowed"],
    trim: true,
    lowercase: true
  },
  firstname: {
    type: String,
    required: [true, 'Please enter first name'],
    trim: true,
    lowercase: true
  },
  lastname: {
    type: String,
    alias: 'surname', //familyname
    required: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    trim: true,
    validate: function(value){
      var pwRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#$&_]).{6,}$/;
      return pwRegex.test(value);
    }
  },
  email: {
    type: String,
    required: true,
    trim: true,
    uppercase: true,
    minlength: 5,
    maxlength: 50,
    //Custom validation for email
    validate: function(value){
      var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      return emailRegex.test(value);
    }
  },
  type: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
  }
});

const User = mongoose.model("User", UserSchema);
module.exports = User;