const express = require("express");
const { check } = require("express-validator");

const router = express.Router();
const Post = require("../models/post");
const { createPost, uploadPostPhotos, getAllPostOfUser ,votelist,vote} = require("../controller/post");

const {
  postValidation,
  validatePostCreate,
} = require("../middleware/validation/post");
const { isAuth } = require("../middleware/auth");
const multer = require("multer");

let upload;
const storage = multer.diskStorage({
  // destination:(req, file, cb)=> {
  //   cb(null, 'photos')
  // },
  // filename:  (req, file, cb)=> {
  //   cb(null, Date.now()+ '_' +file.originalname)
  // }
});

upload = multer({ storage: storage });

router.post("/create-post", isAuth, upload.array("photos"), createPost);
router.get("/getallpost/:id", isAuth, getAllPostOfUser)
router.get('/vote-list',votelist);
router.post("/vote",vote)

module.exports = router;
