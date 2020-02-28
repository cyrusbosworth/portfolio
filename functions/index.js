const functions = require('firebase-functions');

const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const express = require('express');
const cors = require('cors');
const app = express();
app.set('view engine', 'ejs');

app.use(cors({ origin: true }));

//firebase env vars
const gmailEmail = functions.config().gmail.login;
const gmailPassword = functions.config().gmail.pass;

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: gmailEmail,
		pass: gmailPassword
	}
});

admin.initializeApp();

const getDeliveryStatus = function(err, info) {
	if (err) {
		return console.log(err);
	}
	console.log('Message sent %s', info.messageId);
};

app.post('/contact', (req, res) => {
	const mailOptions = {
		from: 'The internet',
		to: 'cyrus@bosworth.dev',
		subject: `Portfolio Contact - ${req.body.name} - ${req.body.email}`,
		text: req.body.message
	};
	transporter.sendMail(mailOptions, getDeliveryStatus);
	res.render('rcd');
});

app.get('/contact', (req, res) => {});

exports.contact = functions.https.onRequest(app);
