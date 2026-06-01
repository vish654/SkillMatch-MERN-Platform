// Contolersss/BookingControl.js
const Booking = require("../Modelll/BookingModel");

const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    if (!bookings || bookings.length === 0) {
      return res.status(404).json({ message: "No bookings found" });
    }
    return res.status(200).json({ bookings });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};

const addBooking = async (req, res) => {
  const { seeker_id, review_id, provider_id, booking_date, description, price, scheduled_date } = req.body;
  try {
    const booking = new Booking({
      seeker_id,
      review_id,
      provider_id,
      booking_date,
      description,
      price,
      scheduled_date
    });
    await booking.save();
    return res.status(201).json({ booking });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Unable to add booking" });
  }
};

const getById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    return res.status(200).json({ booking });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};

const updateBooking = async (req, res, next) => {
    const id = req.params.id;
    const { seeker_id, review_id, provider_id, booking_date, description, price, scheduled_date } = req.body;

    let bookings;
    try {
        bookings = await Booking.findByIdAndUpdate(
            id,
            { seeker_id, review_id, provider_id, booking_date, description, price, scheduled_date },
            { new: true } // returns the updated document
        );
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Error updating booking" });
    }

    if (!bookings) {
        return res.status(404).json({ message: "Unable to update booking details" });
    }

    return res.status(200).json({ bookings });
};

//Delete User Details
const deleteBooking = async (req, res) => {
    const id = req.params.id;

    let booking;
    try {
        booking = await Booking.findByIdAndDelete(id); // updated function
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Error deleting booking" });
    }

    if (!booking) {
        return res.status(404).json({ message: "Booking not found" });
    }

    return res.status(200).json({ message: "Booking deleted successfully", booking });
};



 

// Export all functions properly
module.exports = { getAllBookings, addBooking, getById, updateBooking, deleteBooking };

