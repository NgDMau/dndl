var Project = require('../models/project')
var utils = require('../models/utils')


module.exports = function (app) {
    app.post('/create_project', function (req, res) {
        if (req.isAuthenticated()) {

            var project_config;
            utils.generateRandomProjectID()
            .then((projectID) => {

                var project_config = {
                    name: req.body.name,
                    id: projectID,
                    theme: req.body.theme,
                    rate: req.body.rate,
                    starttime: req.body.starttime,
                    endtime: req.body.endtime,
                    datafile: 'data.txt',
                    priority: 0,
                    uploadtime: '2010-12-31 21:00:00 +00',
                    type: 'sentiment',
                    owner_id: req.session.passport.user.username
                }

                var pool = {
                    user: process.env.user,
                    password: process.env.password,
                    host: process.env.host,
                    port: process.env.port,
                    database: process.env.database,
                    ssl: process.env.ssl
                }

                console.log(pool);

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