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

exports.deletePortfolio = async (req, res) => {
    let id = req.params.id;
    await Portfolios.destroy({ where: { id: id}})
    res.status(200).redirect('/');
};

exports.updatePortfolio = async (req, res) => {
  let id = req.params.id;
  await Portfolios.update({ where: { id: id}})
  res.status(200).redirect('/');
}