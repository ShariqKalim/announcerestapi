const mongoose = require("mongoose");

const announceSchema = new mongoose.Schema({
  announce: {
    type: String,
    require: true,
    trim: true,
  },
  select: {
    type: String,
    require: true,
    trim: true,
  },
  date: {
    type: String,
    require: true,
    trim: true,
  },
});

const announcements = new mongoose.model("Announcements", announceSchema);

module.exports = announcements;
