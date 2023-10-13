//Modules
const express = require('express');
const cors = require('cors');
const methodOverride = require('method-override')

const db = require('./models')
const pageRouter = require('./routes/pageRoute')
const portfolioRouter = require('./routes/portfolioRoute')

//Application
const app = express();

//View Engine
app.set('view engine', 'ejs')

//Middleware
app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

//Routers
app.use('/', pageRouter);
app.use('/portfolios', portfolioRouter)

//Connect the Server
const port = process.env.PORT || 3000;
db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is connected to ${port}`)
  });
});