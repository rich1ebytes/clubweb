import mongoose from "mongoose";

const openingSchema = mongoose.Schema({
  role: {
    type: String,
    required: true,
  },
  openingFor: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  deadline: {
    type: Date,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  openingFormUrl: {
    type: String,
    required: true,
  },
});

const Opening = mongoose.model("Opening", openingSchema);
export default Opening;
