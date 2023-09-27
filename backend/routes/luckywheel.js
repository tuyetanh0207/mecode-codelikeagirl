const express = require('express');
const router = express.Router();

const LuckywheelController = require('../controller/luckywheelController');

router.get('/:id', LuckywheelController.show);

module.exports = router;