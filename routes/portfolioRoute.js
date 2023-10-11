const express = require("express");
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'public/uploads/' }); 
const portfolioController = require('../controller/portfolioController')

//router.get("/", portfolioController.getOnePortfolio);
router.post("/", upload.single('image'), portfolioController.createPortfolio);

module.exports = router;