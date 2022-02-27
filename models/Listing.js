const mongoose = require('mongoose');

const ListingSchema = new mongoose.Schema({
  listing_id: {
      type: String,
      required: true,
      trim: true
  },
  listing_title: {
      type: String,
      required: true,
      trim: true
  },
  description: {
      type: String,
      required: true,
      trim: true
  },
  street: {
      type: String,
      required: true,
      trim: true
  },
  city: {
      type: String,
      required: true,
      trim: true
  },
  postal_code: {
    type: String,
    required: true,
    trim: true
  },
  price: {
      type: String,
      required: true,
      trim: true
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
  username: {
    type: String,
    required: true
  }
});

const Listing = mongoose.model("Listing", ListingSchema);
module.exports = Listing;