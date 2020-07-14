var path = require('path')
var User = require('../models/user')
const db = require('../models/db');


module.exports = function (app) {

    app.get('/project/:id',async function (req, res) {
        var project_id = req.params.id;
        if (req.isAuthenticated()) {
            
            var user = new User(req.session.passport.user)

            if (user.isCustomer()) {
                if (user.isOwnerOf(project_id)) {
                    var data = await db.getProgressProj(project_id);
                    if (data === undefined) {
                        res.send({value: "none"});
                        return
                    }
                    res.send(data.rows)
                }else{
                    res.send('You are not owner this project')
                }
            }else{
                res.send('Permission denied')
            }            
        }else{
            res.send('You must login')
        }
    });

    app.get('/project/:id/worker', async function (req, res) {
        var project_id = req.params.id;
        var index = req.query.page || 1;
        if (req.isAuthenticated()) {
            
            var user = new User(req.session.passport.user)

            if (user.isCustomer()) {
                if (user.isOwnerOf(project_id)) {
                    var data = await db.getProgressByWorker(project_id,index);
                    if (data === undefined) {
                        res.send({value: "none"});
                        return
                    }
                    res.send(data.rows)
                }else{
                    res.send('You are not owner this project')
                }
            }else{
                res.send('Permission denied')
            }            
        }else{
            res.send('You must login')
        }
    });

    app.get('/project/:id/task', async function (req, res) {
        var project_id = req.params.id;
        var index = req.query.page || 1;
        if (req.isAuthenticated()) {
            
            var user = new User(req.session.passport.user)

            if (user.isCustomer()) {
                if (user.isOwnerOf(project_id)) {
                    var data = await db.getProgressByTask(project_id,index);
                    if (data === undefined) {
                        res.send({value: "none"});
                        return
                    }
                    res.send(data.rows)
                }else{
                    res.send('You are not owner this project')
                }
            }else{
                res.send('Permission denied')
            }            
        }else{
            res.send('You must login')
        }
    });
}