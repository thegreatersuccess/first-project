const path = require("path");
const multer = require("multer");

//admin's..
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + req.profile._id + "-" + Date.now() + path.extname(file.originalname));
  },
});
//superadmin's..

const fileFilter = (req, file, callback) => {
  const ext = path.extname(file.originalname);
  if (ext !== ".png" && ext !== ".jpg" && ext !== ".JPG" && ext !== ".jpeg") {
    return callback(new Error("Not Image"));
  }
  callback(null, true);
};
const limits = { fileSize: 2480 * 3230 };

// exports.uploadAdminDoc = multer({ storage, fileFilter, limits }).fields([
//   { name: "citizenshipFront", maxCount: 1 },
//   { name: "citizenshipBack", maxCount: 1 },
//   { name: "businessLicence", maxCount: 1 }
// ]);
exports.uploadAdminDoc = multer({ storage, fileFilter, limits }).single("doc");
exports.uploadAdminPhoto = multer({ storage, fileFilter, limits }).single("photo");
