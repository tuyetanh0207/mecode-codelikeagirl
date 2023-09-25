const express = require('express');
const router = express.Router();

const campaignController = require('../controller/campaignController');

router.get('/leaderboard', campaignController.leaderboard);


module.exports = router;