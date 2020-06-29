var Project = require('../models/project')
var utils = require('../models/utils')
var slash = require('slash');
var multer = require('multer');
var fs = require('fs');
var path = require('path');

var storage = multer.diskStorage({

    destination: function(req, file, cb) {
        var owner_dir = req.session.passport.user.username;
        var dir = path.join(__dirname, '../rawdata/' + owner_dir)
        
        

        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
            console.log("Dir created!")
        }

        cb(null, dir)
    },

    filename: function(req, file, cb) {
        var parts = file.originalname.split('.') || ['unknown','extension'];
        var extension = parts[parts.length - 1];
        var filename = parts[0] + '-' + Date.now() + '.' + extension;
        console.log('Saving file: ',filename);
        //var owner_dir = req.session.passport.user.username;
        //var dir = path.join(__dirname, '../rawdata/' + owner_dir)
        //filename = dir + "/" + filename;
        cb(null, filename);
    }
})

var upload = multer({
    storage: storage
})


module.exports = function (app) {
    app.post('/create_project', upload.single('datafile'), function (req, res) {
        if (req.isAuthenticated()) {
            console.log("--upload file--")

            var dir_arr =  slash(req.file.path).split('/');
            dir_arr = dir_arr.slice(1).slice(-3);
            
            var filepath = '/' + dir_arr.join("/")
            console.log("req.file.path: ", req.file.path)
            console.log(typeof(req.file.path))
            console.log("DIR ARR: ", dir_arr)
            console.log("FILEPATH: ", filepath)
            console.log("--------request body---")
            console.log(req.body)
            console.log("-----------------")

            var owner_dir = req.session.passport.user.username;
            var dir = path.join(__dirname, '../rawdata/' + owner_dir)
            
            utils.generateRandomProjectID()
            .then((projectID) => {

                var project_config = {
                    name: req.body.name,
                    id: projectID,
                    theme: req.body.theme || 'Mặc định',
                    rate: req.body.rate,
                    starttime: req.body.starttime,
                    endtime: req.body.endtime,
                    datafile: slash(req.file.path) || 'data.txt', //req.body.datafile
                    priority: 0,
                    uploadtime: '2010-12-31 21:00:00 +00',
                    type: req.body.type || 'sentiment',
                    owner_id: req.session.passport.user.username,
                    labels: req.body.labels || ["INITIAL_VALUE"]
                }

                var new_project = new Project(project_config);
                
                new_project.register()
                    .then((registered) => {
                        console.log("registered", registered);
                        if (checkForSuccess(registered)) {
                            new_project.create()
                                .then((created) => {
                                    if (checkForSuccess(created)) {
                                        new_project.importRawFileToTable()
                                        .then(notiProjectCreated(res, true))
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