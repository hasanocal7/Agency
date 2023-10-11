const { Portfolios } = require('../models');

exports.getHomePage = async (req,res) => {
    const portfolios = await Portfolios.findAll();
    res.render('index', {
        portfolios,
    })
}