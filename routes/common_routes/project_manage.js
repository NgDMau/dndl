var path = require('path')
var User = require('../../models/user')

module.exports = function (app) {
    app.get('/project_manage', function (req, res) {
        res.render("customer_views/project_manage.ejs")
    });

    app.get('/project/:id/info',async function (req, res) {
        var project_id = req.params.id;
        if (req.isAuthenticated()) {
            
            var user = new User(req.session.passport.user)

            if (user.isCustomer()) {
                if (user.isOwnerOf(project_id)) {
                    
                    res.render("customer_views/project_detail_info.ejs",{ project_id: project_id })

                }else{
                    res.send('You are not owner this project')
                }
            }else{
                res.send('Permission denied')
            }            
        }else{
            res.redirect("/login")
        }
    });
}