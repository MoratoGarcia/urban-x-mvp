'use strict';

const Path = require('path');
const Express = require('express');
const BodyParser = require('body-parser');
const Logger = require('morgan');

const app = Express();

app.use(Express.static('app/public'));
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: false }));
app.set('view engine', 'jade');
app.set('views', './app/views');
app.use(Logger('tiny'));

app.get('/', (req, res) => {
	res.render('login');
});

app.get('/checador', (req, res) => {
	res.render('checador');
});

app.post('/process/login', (req, res) => {
	res.redirect('/checador');
});

app.post('/process/route', (req, res) => {
	const data = req.body;
	data.date = new Date();
	res.json(data);
});

module.exports = app;
