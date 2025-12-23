const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const PageContent = require("../models/PageContent");

// Get Page Content by Name (e.g., 'home')
router.get("/:page", async (req, res) => {
  try {
    const content = await PageContent.findOne({ page: req.params.page });
    // Return empty content if not found rather than 404, so frontend doesn't break
    res.json(content || {});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Admin: Update Page Content
router.post("/", auth, async (req, res) => {
  try {
    const { page } = req.body;
    if (!page) return res.status(400).json({ message: "Page name required" });

    const content = await PageContent.findOneAndUpdate(
      { page },
      req.body,
      { new: true, upsert: true } // Create if doesn't exist
    );
    res.json(content);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
