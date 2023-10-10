const express = require("express");
const router = express.Router();
const { Portfolios } = require("../models");

router.get("/", async (req, res) => {
  const listOfPortfolios = await Portfolios.findAll();
  res.json(listOfPortfolios);
});

router.post("/", async (req, res) => {
  const portfolio = req.body;
  await Portfolios.create(portfolio);
  res.status(201).redirect('/');
});

module.exports = router;