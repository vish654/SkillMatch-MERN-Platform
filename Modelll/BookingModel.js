const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  seeker_id: {
    type: String,
    required: true
  },
  review_id: {
    type: String,
    required: true
  },
  provider_id: {
    type: String,
    required: true
  },
  booking_date: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  scheduled_date: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model("Booking", bookingSchema);
