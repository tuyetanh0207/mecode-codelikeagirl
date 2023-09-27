const express = require('express');
const router = express.Router();

const campaignController = require('../controller/campaignController');


router.get('/leaderboard', campaignController.leaderboard);
router.get('/leaderboard/user/:id/rank', campaignController.rank);



module.exports = router;