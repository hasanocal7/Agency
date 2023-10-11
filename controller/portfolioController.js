const { Portfolios } = require('../models');
const multer = require('multer');

exports.createPortfolio = async (req, res) => {
  try {
    if (req.file instanceof multer.MulterError) {
      console.error('Resim yüklenirken Multer kaynaklı hata oluştu');
      return res.status(400).send('Resim yüklenirken hata oluştu');
    } else if (!req.file) {
      console.error('Resim yüklenemedi veya eksik');
      return res.status(400).send('Lütfen bir resim yükleyin');
    }

    const imageFileName = 'uploads/' + req.file.filename;

    // Portföy oluşturma işlemi
    const portfolio = await Portfolios.create({
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