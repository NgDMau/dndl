const Project = require('../../models/project');

module.exports = function(app) {
    app.get('/label', async function(req, res) {
        if(req.isAuthenticated()) {
            var project_id = req.query.project_id;
            var this_project = new Project({id: project_id});
            let result = await this_project.getAttribute("type");
            if (result.code !== "OK") {
                return "ERROR"
            }
            var project_type = result.type
            switch (project_type) {
                case "audio_transcription":
                    res.render('full_system/audio_transcription.ejs', {project_id: project_id});
                    return
                    break
            }
        }
        res.redirect('/login');
    })
}