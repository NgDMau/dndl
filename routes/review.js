const db = require('../models/db');

module.exports = function(app) {
    app.get('/review/project', function(req, res) {
        if (req.isAuthenticated()) {
            var project_id = req.query.project_id;
            console.log("project_id: " + project_id)
            var reviewer_id = req.session.passport.user.email;
            console.log("reviewer_id: ", reviewer_id);
            res.render('audio_review.ejs', {
                project_id: project_id,
                reviewer_id: reviewer_id
            });
            return
        }
        res.redirect('/login');
    })

    app.post('/review/project/:project_id', async function(req, res) {
        if (req.isAuthenticated()) {
            var project_id = req.params.project_id
            console.log(req.body);

            console.log("req.body", req.body)
            var reviewer_id = req.session.passport.user.email;
            var review_time = new Date();
            console.log("review_id", req.body.review_id);
            if (req.body.review_id !== -1){
                var insert_review_result = await db.insertReviewData(reviewer_id, project_id, review_time, req.body);
                if(insert_review_result) {
                    console.log("INSERT REVIEW SUCCESSFULLY")
                }
            }
            
            var data = await db.fetchUnreviewedData(project_id)
            console.log(data)

            if(data.severity === 'ERROR') {
                data = {
                    code: "ERROR"
                }
            }

            // if(data.rows === undefined){
            //     data = {
            //         code: "full"
            //     }
            // }
            
            res.status(200).send(data);
            return
        }
        res.redirect('/login');
    })
}