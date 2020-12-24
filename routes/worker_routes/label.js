const Project = require('../../models/project');

module.exports = function(app) {
    app.get('/label', async function(req, res) {
        if(req.isAuthenticated()) {
            var project_id = req.query.project_id;
            var labeler_id = req.session.passport.user.id;
            var labeler_username = req.session.passport.user.username;
            var labeler_name = req.session.passport.user.fullname;
            
            console.log("project_id", project_id);
            var this_project = new Project({id: project_id});
            let result = await this_project.getAttribute("type");
            if (result.code !== "OK") {
                return "ERROR"
            }
            var project_type = result.type
            console.log("project_type", project_type);
            switch (project_type) {
                case "audio_transcription":
                    res.render('worker_views/audio_transcription.ejs', {project_id: project_id});
                    break

                case "image_key_points":
                    res.render('worker_views/image_key_points.ejs', {project_id: project_id, labeler_id: labeler_id, labeler_name: labeler_name, labeler_username: labeler_username});
                    break
            }
            return
        }
        res.redirect('/login');
    })
}