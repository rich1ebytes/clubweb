import multer from "multer";

// Use disk storage with original filename to ensure req.file.path is available for Cloudinary
const storage = multer.diskStorage({
  filename: (_req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

export default upload;
