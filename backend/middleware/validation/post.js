const {check, validationResult } = require('express-validator')

exports.validatePostCreate = [
    check('userId').trim().not().isEmpty().withMessage('UserId cannot be null'),
    check('taskName').trim().not().isEmpty().withMessage('TaskName cannot be null')
    .isString().withMessage('Must be a valid task name'),
    check('taskId').trim().not().isEmpty().withMessage('TaskId cannot be null'),
   //check('photos').trim().not().isEmpty().withMessage('Photos cannot be null'),
   check('address').trim().not().isEmpty().withMessage('Address cannot be null')
]

exports.postValidation = (req, res, next) =>{
    const result = validationResult(req).array();
    if(!result.length) return next();
    const error = result[0].msg;
    res.json({success: false,message: error})
}