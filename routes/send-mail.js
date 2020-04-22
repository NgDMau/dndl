const nodemailer = require('nodemailer');

module.exports = function(user, pass, hash, email_to) {

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: user,
        pass: pass
    }
});

var link = "http://http://inlab.nisci.gov.vn/verify?hash=" + hash;

var mailOptions = {
    from: user,
    to: email_to,
    subject: 'Sending Email using Node.js',
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

