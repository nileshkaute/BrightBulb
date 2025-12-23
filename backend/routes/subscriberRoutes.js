const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const Subscriber = require("../models/Subscriber");

// Start Newsletter Subscription
router.post("/", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ message: "Email required" });

    // Check if exists
    const existing = await Subscriber.findOne({ email });
    if (existing)
      return res.status(400).json({ message: "Already subscribed" });

    const sub = await Subscriber.create({ email });
    res.json({ message: "Subscribed successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Admin: View all subscribers
router.get("/", auth, async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.json(subscribers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
