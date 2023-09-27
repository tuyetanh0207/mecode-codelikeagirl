
const express = require('express')
const {check} = require('express-validator')

const router = express.Router();
const User = require('../models/user')
const {createUser, userSignIn, uploadProfile,getNoti} = require('../controller/user')
const {validateUserSignUp, userValidation, validateUserSignIn} = require ('../middleware/validation/user');
const { isAuth } = require('../middleware/auth');
const multer = require('multer');

const storage = multer.diskStorage({});

const fileFilter = (req, file, cb) => {
    if(file[0].mimetype.startsWith('image')){
        cb(null, true)
    } else {

        
        cb('invalid image file!', false)
    }
}
const uploads = multer({storage, fileFilter})
//{profile: 'image'}
router.post('/create-user', validateUserSignUp, userValidation, createUser)
router.post('/sign-in', validateUserSignIn, userValidation, userSignIn)
router.post('/upload-profile',isAuth, uploads.single('profile'), uploadProfile)

router.get("/:id/notification",getNoti);

module.exports= router