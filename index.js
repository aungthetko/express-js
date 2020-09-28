const express = require('express');
const { restart } = require('nodemon');
const path = require('path');
const exphbs = require('express-handlebars')
const logger = require('./middleware/logger');
const members = require('./Members')

const app = express();

// Init middleware
// app.use(logger);

// Handlebars Middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// home route
app.get('/', (req, res) => res.render('index', {
    title: 'User App',
    members
}));

app.use(express.static(path.join(__dirname, 'public')))

// member api route
app.use('/api/members', require('./routes/api/members'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
