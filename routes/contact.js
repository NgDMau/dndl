const path = require('path')
const fs = require('fs')
const fetch = require("node-fetch");

module.exports = function (app) {
    app.post('/contact', function (req, res) {
        //res.sendFile(path.join(__dirname, '../views/', 'certificate.html'))
        console.log(req.body);
        var contact_info = {
            name: req.body.name || "unknown",
            company: req.body.company || "unknown",
            phone: req.body.phone || "unknown",
            email: req.body.email || "unknown@domain",
            interested: req.body.interested || ["unknown"],
            content: req.body.content || "unknown",
        }
        console.log(`Got message: ${contact_info}`);

        var data = contact_info


            var data = insertContact(data);

            if (data.result == 'success'){
                res.send("success")
            }else{
                res.send("error")
            }


    });
}

async function insertContact(input) {
    
    var url = 'https://script.google.com/macros/s/AKfycbxea9e-4H2JiHE74ZcqnehhgtVdsqfTNSUSZPyEpfdtKo5hNQ8/exec'
    url = url + "?Name=" + input.name + "&Company=" + input.company + "&Phone=" + input.phone + "&Email=" + input.email + "&Content=" + input.content;
    input.interested.forEach(element => url = url + "&Interested=" + element )
    var res = encodeURI(url)
    let response = await fetch(res, {mode: "no-cors"});
    let data = await response.json()
    return data;

}