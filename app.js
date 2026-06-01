const express = require("express");
const mongoose = require("mongoose");
const bookingRoutes = require("./Routeee/BookingRoute");


const app = express();

// Middleware
app.use(express.json());

// Booking routes
app.use("/bookings", bookingRoutes);

// Test route
app.get("/test", (req, res) => res.send("Server is working"));



// Connect to MongoDB
mongoose.connect("mongodb+srv://admin:<db_password>@cluster0.72k2cam.mongodb.net/")  mongodb+srv://admin:X4JFZNvCpV4ynVns@cluster0.72k2cam.mongodb.net/
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(5000, () => console.log("🚀 Server running on port 5000"));
  })
  .catch(err => console.error("❌ DB Connection Error:", err));




  mongodb+srv://admin:X4JFZNvCpV4ynVns@cluster0.72k2cam.mongodb.net/