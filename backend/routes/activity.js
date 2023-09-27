const express = require('express');
const router = express.Router();

const ActivityController = require('../controller/activityController');

router.get('/tasklist', ActivityController.show);

module.exports = router;