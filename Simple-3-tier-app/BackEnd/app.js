require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 3000;

/* ==============================================================================================================
   MongoDB Connection (Safe)  →  Without it if MongoDB not working the app will not start without you notice
================================================================================================================= */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });

/* ===============================
   Schema & Model
================================ */
const CounterSchema = new mongoose.Schema({
  value: { type: Number, default: 0 },
});

const Counter = mongoose.model("Counter", CounterSchema);

/* ===============================
   Middlewares
================================ */
app.use(cors({ origin: "*", methods: ["GET"] }));
app.use(express.json());

/* ===============================================================
   Health Check (EKS / ALB)
    Liveness Probe   →  Check that pod working fine
    Readiness Probe  →  Check that pod ready to serve traffic
================================================================== */
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

/* ===============================================================================
   Increment Counter "API"
   (Atomic & Safe) for "concurrent requests" if two users hit at the same time
================================================================================== */
app.get("/api/increment", async (req, res) => {
  try {
    const counter = await Counter.findOneAndUpdate(
      {},
      { $inc: { value: 1 } },
      { new: true, upsert: true }
    );

    res.json({ counter: counter.value });
  } catch (err) {
    console.error("Error incrementing counter:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

/* ===============================
   Start Server
================================ */
app.listen(port, "0.0.0.0", () => {
  console.log(`🚀 Backend API running on port: ${port}`);
});
