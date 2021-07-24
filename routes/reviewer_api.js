var path = require('path')
var User = require('../models/user')
const db = require('../models/db');


module.exports = function (app) {

    app.get('/task/reviewer/:id',async function (req, res) {
        var project_id = req.params.id;
        if (req.isAuthenticated()) {
            
            var user = new User(req.session.passport.user)

            if (user.isReviewer()) {
                    var data = await db.getTaskforReviewer(project_id);
                    if (data === undefined) {
                        res.send({value: "none"});
                        return
                    }
                    res.send(data.rows)
            }else{
                res.send('Permission denied')
            }            
        }else{
            res.redirect('/login')
        }
    });
}