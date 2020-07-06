app.get('/project/:project_id', async function(req, res) {
    if (req.isAuthenticated()) {

        var project_id = req.params.project_id;
        var this_user = req.session.passport.user;

        if (await this_user.isOwnerOf(project_id)) {
            // let kpis = await project(project_id).getKpis();
            let data = {
                project_id: project_id
            }
            res.render("project_detail.ejs", data);
        }

    }
    



});