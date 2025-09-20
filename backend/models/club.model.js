import mongoose from 'mongoose';

const clubSchema = new mongoose.Schema({
  name: { type: String, required: true },
  tagline: { type: String },
  description: { type: String },
  imageUrl: { type: String },
  eventImage: { type: String },
});

const Club = mongoose.model('Club', clubSchema);

export default Club;
