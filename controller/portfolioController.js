const { Portfolios } = require('../models');
const multer = require('multer');

exports.createPortfolio = async (req, res) => {
  try {
    const uploadedImage = req.file;
    if (!uploadedImage) {
      console.error('Dosya yüklenemedi.');
      return res.status(400).send('Dosya yüklenemedi.');
    }
    await Portfolios.create({
      ...req.body,
      image: imageFileName,
    });

    console.log(`${portfolio.image} Başarılı bir şekilde yüklendi`);

    return res.redirect('/');
  } catch (error) {
    console.error(error);
    return res.status(500).send('Bir hata oluştu');
  }
};


exports.getOnePortfolio = async (req, res) => {
    let id = req.params.id
    let portfolio = await Portfolios.findOne({ where: { id: id }})
    res.render('index', {
        portfolio,
    });
}