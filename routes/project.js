const User = require('../models/user');
const Project = require('../models/project');

module.exports = function(app) {
    app.get('/project/:project_id', async function(req, res) {
        if (req.isAuthenticated()) {
    
            var project_id = req.params.project_id;
            var this_user = new User(req.session.passport.user);
            
            if (await this_user.isOwnerOf(project_id)) {
                let this_project = new Project({id: project_id});
                let data = await this_project.getKPIS();
                console.log("data", data); 
                res.render("project_detail.ejs",{data});
                return;
            }
            res.write("THERE MUST BE SMTHG WRONG");
            return;
        } else {
            res.redirect('/login');
        }
    });

    app.post('/project/:project_id', async function(req, res) {
        if (req.isAuthenticated()) {
            var this_project = new Project({id: req.params.project_id});
            var data = await this_project.getKPIS();
            res.send(data);
        }
    });

    app.post('project/:project_id/update', async function(req, res) {
        if(req.isAuthenticated()) {
            var project_id = req.params.project_id;
            var this_project = new Project({id: project_id});
            var update_data = req.body.update;

            var update_result = await this_project.update(update_data);
            if(update_result) {
                res.send({success: true});
                return true;
            }
            res.send({success: false});
            return false
        }
    })
}

