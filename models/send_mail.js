const nodemailer = require('nodemailer');
var CryptoJS = require("crypto-js");

email_from = process.env.EMAIL_USERNAME || "inlabvietnam";
pass_email = process.env.EMAIL_PASSWORD || "Nisci123";



module.exports = {send_mail,decode,encode};

function decode(encrypted) {
    var username = CryptoJS.AES.decrypt(encrypted, "inlabinfore");
    return username.toString(CryptoJS.enc.Utf8);
}

function encode(username) {
    var hash = CryptoJS.AES.encrypt(username + "_date_" + Date.now(), "inlabinfore");
    return encodeURIComponent(hash.toString());
}

function send_mail(email_to, username, subject, html) {

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: email_from,
            pass: pass_email
        }
    });

    var mailOptions = {
        from: email_from,
        to: email_to,
        subject: subject,
        html: html
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    })
}