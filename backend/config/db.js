const mongoose = require("mongoose");

const connectDB = async () => {
  const mongoURI = process.env.MONGO_URI || process.env.ATLASDB_URL;

  if (!mongoURI) {
    console.error(
      "ERROR: MONGO_URI or ATLASDB_URL is not set. Set one of these environment variables in Render or your .env file."
    );
    process.exit(1);
  }

  try {
    await mongoose.connect(mongoURI);
    console.log("MongoDB Connected");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;
