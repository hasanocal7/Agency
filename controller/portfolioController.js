const { Portfolios } = require('../models');

exports.createPortfolio = async (req, res) => {
  try {
    const uploadedImage = req.file;
    if (!uploadedImage) {
      console.error('Dosya yüklenemedi.');
      return res.status(400).send('Dosya yüklenemedi.');
    }
    await Portfolios.create({
      ...req.body,
      image: '/uploads/' + uploadedImage.filename,
    });
    res.redirect('/');
  } catch (error) {
    console.error('Portföy oluşturulamadı:', error);
    res.status(500).send('Portföy oluşturulamadı.');
  }
}


exports.getOnePortfolio = async (req, res) => {
    let id = req.params.id
    let portfolio = await Portfolios.findOne({ where: { id: id }})
    res.render('index', {
        portfolio,
    });
}