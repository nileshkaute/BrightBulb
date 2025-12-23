const mongoose = require("mongoose");

const subscriberSchema = new mongoose.Schema(
  {
    email: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Subscriber", subscriberSchema);
