const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes');
const { sequelize } = require('./models')

const app = express();

app.use(bodyParser.json());
app.use(morgan('combined'));

app.use('/', routes);

sequelize.sync()
    .then(
        app.listen(8081, () => console.log('Connected to DB and listening on Port 8081'))
    )
