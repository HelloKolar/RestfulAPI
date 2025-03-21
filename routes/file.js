const express = require("express");
const router = express.Router();
const { fileController } = require("../controllers");
const isAuth = require("../middlewares/isAuth");
const upload = require("../middlewares/upload");

// router.post(
//   "/upload",
//   isAuth,
//   fileController.uploadFile,
//   upload.array("files", 5)
// );
router.post(
  "/upload",
  isAuth,
  upload.array("image", 5),
  fileController.uploadFile
);

module.exports = router;
