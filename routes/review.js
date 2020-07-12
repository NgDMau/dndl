const db =require('../models/db');

module.exports = function(app) {
    app.get('/review/project', function(req, res) {
        var project_id = req.query.project_id;
        console.log("project_id: " + project_id)
        var reviewer_id = req.session.passport.user.email;
        console.log("reviewer_id: ", reviewer_id);
        res.render('audio_review.ejs', {
            project_id: project_id,
            reviewer_id: reviewer_id
        });
    })

    app.post('/review/project/:project_id', async function(req, res) {
        var project_id = req.params.project_id
        console.log(req.body);

        var data = await db.fetchUnreviewedData(project_id)

        res.status(200).send(data);
    })
}