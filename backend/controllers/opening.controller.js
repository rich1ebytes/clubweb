import Opening from "../models/opening.model.js";
import { cloudinary } from "../config/cloudinary.js";

// Get a single opening by ID (Public)
export const openingById = async (req, res) => {
  try {
    const opening = await Opening.findById(req.params.id);
    if (opening) {
      res.status(200).json(opening);
    } else {
      res.status(404).json({ message: "Opening not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Lists all openings (Public)
export const openingList = async (req, res) => {
  try {
    const allOpenings = await Opening.find();
    res.status(200).json(allOpenings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Creates a new opening (Protected - Club Member)
export const openingPost = async (req, res) => {
  try {
    const { role, openingFor, description, deadline, openingFormUrl } =
      req.body;
    const { _id } = req.user;

    let imageUrl = null;
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);
      imageUrl = result.secure_url;
    }

    const newOpening = await Opening.create({
      role,
      openingFor,
      description,
      deadline,
      openingFormUrl,
      image: imageUrl,
      createdBy: _id, // Link to the creator
    });

    if (newOpening) res.status(200).json(newOpening);
    else res.status(400).json({ message: "Didn't Post !" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Deletes an opening (Protected - Club Member)
export const openingDeletion = async (req, res) => {
  try {
    const opening = await Opening.findById(req.params.id);
    if (!opening) {
      return res.status(404).json({ message: "Opening not found" });
    }

    // Check if the logged-in user is the creator
    if (opening.createdBy.toString() !== req.user._id.toString()) {
      return res
        .status(401)
        .json({ message: "Not authorized to delete this opening" });
    }

    await opening.deleteOne();
    res.status(200).json({ message: "Opening deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get openings created by the logged-in user (Protected - Club Member)
export const myOpenings = async (req, res) => {
  try {
    const openings = await Opening.find({ createdBy: req.user._id }).populate(
      "createdBy",
      "username email clubName"
    );
    res.status(200).json(openings);
  } catch (error) {
    console.error("Error in myOpenings:", error);
    res.status(500).json({ message: error.message });
  }
};

// Edits an opening (Protected - Club Member)
export const openingEdit = async (req, res) => {
  try {
    const opening = await Opening.findById(req.params.id);
    if (!opening) {
      return res.status(404).json({ message: "Opening not found" });
    }

    // Check if the logged-in user is the creator
    if (opening.createdBy.toString() !== req.user._id.toString()) {
      return res
        .status(401)
        .json({ message: "Not authorized to edit this opening" });
    }

    const editDetails = await Opening.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).json(editDetails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
