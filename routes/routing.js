const express = require('express');
const router = express.Router();

const textRead = require('../controller/textRead');

router.get('/', textRead.getParsedText);

module.exports = router;