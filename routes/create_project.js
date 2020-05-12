var Project = require('../models/project')
var utils = require('../models/utils')

var multer = require('multer');
var fs = require('fs');
var path = require('path');


module.exports = function (app) {
    app.post('/create_project', function (req, res) {
        if (req.isAuthenticated()) {
            
            console.log("--------request body---")
            console.log(req.body)
            console.log("-----------------")

            var user_dir = '../customers_data/' + req.session.passport.user.username;
            user_dir = path.join(__dirname, user_dir)
            if (!fs.existsSync(user_dir)){
                fs.mkdirSync(user_dir);
            }

            var datafile = ""

            var storage = multer.diskStorage({
                destination: function(req, file, cb) {
                    cb(null, path.join(__dirname, '../breathe'))
                },
                filename: function(req, file, cb) {
                    var parts = file.originalname.split('.') || ['unknown','extension'];
                    var extension = parts[parts.length - 1];
                    if (["txt", "doc", "text", "csv", "json"].indexOf(extension) > -1) {
                        //var filename = parts[0] + '-' + Date.now() + '.' + extension;
                        //console.log('Saving file: ',filename);
                        var filename = user_dir + '/' + file.originalname 
                        datafile = filename;
                        cb(null, filename);
                    }
                    res.send("Wrong file format!")
                    return
                    
                }
            })
            
            var upload = multer({
                storage: storage
            })

            upload.single('file');
            
            utils.generateRandomProjectID()
            .then((projectID) => {

                var project_config = {
                    name: req.body.name,
                    id: projectID,
                    theme: req.body.theme || 'Mặc định',
                    rate: req.body.rate,
                    starttime: req.body.starttime,
                    endtime: req.body.endtime,
                    datafile: req.body.datafile || datafile || 'data.txt', //req.body.datafile
                    priority: 0,
                    uploadtime: '2010-12-31 21:00:00 +00',
                    type: 'sentiment',
                    owner_id: req.session.passport.user.username
                }

                var new_project = new Project(project_config);
                // console.log("====================")
                // //console.log(cre)
                // //console.log("====================")

                //res.redirect('/dashboard');
                new_project.register()
                    .then((registered) => {
                        if (checkForSuccess(registered)) {
                            new_project.create()
                                .then((created) => {
                                    if (checkForSuccess(created)) {
                                        notiProjectCreated(res, true)
                                    } else {
                                        notiProjectCreated(res, false)
                                    }
                                })
                                .catch((err) => {
                                    notiProjectCreated(res, false)
                                })
                        } else {
                            notiProjectCreated(res, false)
                        }
                    })
                    .catch((err) => {
                        notiProjectCreated(res, false);
                    });
            })
        }
    });
}

function checkForSuccess (result ) {
    if (result.name === 'error') {
        return false;
    }
    return true;
}

function notiProjectCreated(res, success) {
    if (success) {
        res.redirect('/dashboard?action=project_created')
    }  else {
        res.redirect('/dashboard?action=failed')
    }
}