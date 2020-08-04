const Project = require('../../models/project');
const db = require('../../models/db');

module.exports = function(app) {
    app.get('/label', async function(req, res) {
        if(req.isAuthenticated()) {
            var projectID = req.query.project_id;
            var this_project = new Project({id: projectID});
            let result = await this_project.getAttribute("type");
            if (result.code !== "OK") {
                return "ERROR"
            }

            let workerID = req.session.passport.user.id;
            let noWorkDone = await db.numberOfWorkDone(workerID, projectID);
            noWorkDone = noWorkDone.count
            console.log("WORK HAVE DONE:", noWorkDone)

            var project_type = result.type

            switch (project_type) {
                case "audio_transcription":
                    res.render('full_system/audio_transcription.ejs', {project_id: projectID, noWorkDone: noWorkDone});
                    break;
                case "image_object_detection":
                    res.render("full_system/image_object_detection.ejs", {project_id: projectID, noWorkDone: noWorkDone});
                    break;
            }
            return
        }
        res.redirect('/login');
    })
}