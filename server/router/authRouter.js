const express = require('express')
const router = express.Router();
const login = require('../controller/login');

router.post('/login', login);  
router.get('/login', (req, res) => {
    res.send('/auth/login hit')
}) 

//router.post('/register', register);

module.exports = router;