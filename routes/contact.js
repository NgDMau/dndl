const path = require('path')
const fs = require('fs')

module.exports = function (app) {
    app.post('/contact', function (req, res) {
        //res.sendFile(path.join(__dirname, '../views/', 'certificate.html'))
        console.log(req.body);
        var contact_info = {
            name: req.body.name || "unknown",
            company: req.body.company || "unknown",
            email: req.body.email || "unknown@domain",
            content: req.body.comment || "unknown"
        }
        console.log(`Got message from ${contact_info.name}`);
        try {
            fs.appendFile(path.join(__dirname, '../contact/', 'contact.json'), JSON.stringify(contact_info), function(err){
                if (err) {
                    res.write("Error");
                    throw err;

                }
            //res.write("Message sent successfully!")
            res.redirect('/')
            });
        } catch(e) {
            console.log("Contact recording wrong!")
            res.write("Message sent failed!")
            res.redirect('/')
            throw e;

        }
    });
}