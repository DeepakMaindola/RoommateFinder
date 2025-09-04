const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
  email: { type: String, required: true, unique: true },
  budget: { type: Number, required: true },
  location: { type: String, required: true },
  lifestyle: { type: String }, // e.g., smoker/non-smoker, vegetarian, etc.
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
