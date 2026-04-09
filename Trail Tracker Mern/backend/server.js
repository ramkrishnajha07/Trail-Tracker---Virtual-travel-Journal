const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 5000;

// Middleware to parse JSON
app.use(express.json());

// MongoDB connection
const MONGO_URI = "mongodb+srv://trailtracker_user:zrObyGyRbBMsnDBO@trailtrackercluster.wlandoe.mongodb.net/?appName=TrailTrackerCluster";


mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((err) => console.log("MongoDB Connection Error:", err));

// Import routes
const authRoutes = require("./routes/auth");

// Use routes
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Backend server is running successfully!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
