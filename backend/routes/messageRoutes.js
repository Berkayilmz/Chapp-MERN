const express = require('express');
const { sendMessage,getMessages } = require('../controlles/messageController')
const protectRoute = require('../middleware/protectRoute')

const router = express.Router();

router.post('/send/:id', protectRoute, sendMessage); //This id is a user id
router.get('/:id', protectRoute, getMessages); 


module.exports = router;