const nodemailer = require('nodemailer');
var CryptoJS = require("crypto-js");

function encode(username) {
    var hash = CryptoJS.AES.encrypt(username + "_date_" + Date.now(), "inlabinfore");
    return encodeURIComponent(hash.toString());
}

module.exports = function(user, pass, email_to, username) {

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: user,
        pass: pass
    }
});

var link = "http://http://inlab.nisci.gov.vn/verify?hash=" + encode(username);

var mailOptions = {
    from: user,
    to: email_to,
    subject: 'Inlab verify signup',
    html: "Hello,<br> Please Click on the link to verify your email.<br><a href=" + link + ">Click here to verify</a>"
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
}
