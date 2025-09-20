import mongoose from "mongoose";

const newEventSchema = mongoose.Schema({
  eventName: {
    type: String,
    required: true,
  },
  eventDate: {
    type: String,
    required: true,
  },
  eventVenue: {
    type: String,
    required: true,
  },
  eventImage: {
    type: String,
    required: false,
  },
  eventDescription: {
    type: String,
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  eventFormUrl: {
    type: String,
  },
});

const NewEvent = mongoose.model("NewEvent", newEventSchema);
export default NewEvent;