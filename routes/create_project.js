var Project = require('../models/project')

module.exports = function (app) {
    app.post('/create_project', function (req, res) {
        if (req.isAuthenticated()) {
            var project_config = {
                name: req.body.name,
                id: 'gotcha',
                theme: req.body.theme,
                rate: req.body.rate,
                starttime: req.body.starttime,
                endtime: req.body.endtime,
                datafile: 'data.txt',
                priority: 0,
                uploadtime:'2010-12-31 21:00:00 +00',
                type: 'sentiment',
                owner_id: req.session.passport.user.username
            }
            var new_project = new Project(project_config);
            new_project.register();
            //new_project.create();
            //window.location.href = '/dashboard'
        }
        
    });
}