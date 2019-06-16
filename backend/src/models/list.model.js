import mongoose from 'mongoose';

const listschema = new mongoose.Schema({
  item: String,
  isChecked: { type: Boolean, default: false },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('List', listschema);
