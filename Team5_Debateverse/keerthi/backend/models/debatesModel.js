const mongoose = require("mongoose");

const debatesSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: [
    {
      answer: { type: String, required: true },
      votes: { type: Number, default: 0 },
    },
  ],
  createdBy: { type: String, required: true },
  createdOn: { type: Date, required: true },
  totalVotes: { type: Number, default: 0 },
  totalLikes: { type: Number, default: 0 },
});

module.exports = mongoose.model("Debate", debatesSchema);