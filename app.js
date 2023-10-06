// Modules
const express = require('express');

const db = require('./models')

// Application
const app = express();

// Template Engine
app.set('view engine', 'ejs');

// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Get Request
app.get('/', (req, res) => {
    res.render('index');
});

// Server Connection
const port = 8080;
db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server is Connected Port: ${port}`);
    });
})
