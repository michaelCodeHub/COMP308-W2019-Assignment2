let express = require('express');
let router = express.Router();
// <!-- 
// File Name : index.js
// Author Name : Michael ADAIKALARAJ
// Student Number : 300958145
// Date : Mar 29, 2019 -->

let mainController = require('../controllers/main');


/* POST - processes the Login Page */
router.post('/login', mainController.processLoginPage);

/* POST */
router.post('/register', mainController.processRegisterPage);

/* GET - perform user logout */
router.get('/logout', mainController.performLogout);

module.exports = router;
