const mongoose = require("mongoose");

const pageSchema = new mongoose.Schema({
  page: String, // home, product
  heroTitle: String,
  heroSubtitle: String,
  videoUrl: String,
  ctaText: String,
});

module.exports = mongoose.model("PageContent", pageSchema);
