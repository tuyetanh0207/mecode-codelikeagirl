const express = require('express');
const router = express.Router();

const ActivityController = require('../controller/activityController');

router.get('/tasklist', ActivityController.show);
router.get('/available', ActivityController.available);

module.exports = router;