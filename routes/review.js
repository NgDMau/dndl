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
        var data = req.body.data;
        console.log(req.body);

        var data = {
            url: "audio/Wednesday-at-07-50.wav",
            text: "HÔm nay là một ngày đặc biệt trong cuộc đời tôi",
            code: "continue"
        }
        
        res.status(200).send(data);
    })
}