var path = require('path')
var User = require('../models/user')
const db = require('../models/db');


module.exports = function (app) {

    app.get('/project',async function (req, res) {
        var index = req.query.page || 1;
        if (req.isAuthenticated()) {
            
            var user = new User(req.session.passport.user)

            if (user.isWorker()) {

                var data = await db.getAllProjects(index);
                var page = await db.getPage("projects_metadata",10);
                if (data === undefined) {
                    res.send({value: "none"});
                    return
                }
                if (page === undefined) {
                    res.send({value: "none"});
                    return
                }

                var total_page

                if(parseInt(page.rows[0].total_page)<10){
                    total_page = 1
                }else{
                    total_page = Math.round(parseInt(page.rows[0].total_page)/10)
                }


                var result = JSON.parse('{"current_page":"'+index+'","total_page":"'+total_page+'", "data":[]}')
                for (let i = 0; i < data.rows.length; i++) {
                    result.data.push(data.rows[i]);    
                }
                res.send(result)


            }else{
                res.send('Permission denied')
            }            
        }else{
            res.redirect('/login')
        }
    });

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
            res.redirect('/login')
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
            res.redirect('/login')
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
            res.redirect('/login')
        }
    });
}