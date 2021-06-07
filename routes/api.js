const path = require('path');
const db = require('../models/db');

module.exports = function (app) {
    app.get('/api/data/:project_id', async function (req, res) {
        if (req.isAuthenticated()) {
            let tasks = [{
                completions: [],
                predictions: [],
                id: 1,
                data: {
                    image: "https://images.unsplash.com/photo-1529905270444-b5e32acc3bdd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                    
                }
            },
            {
                completions: [],
                predictions: [],
                id: 2,
                data: {
                    image: "https://images.unsplash.com/photo-1512289984044-071903207f5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                    
                }
            },
            {
                completions: [],
                predictions: [],
                id: 3,
                data: {
                    image: "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
                    
                }
            },
            {
                completions: [],
                predictions: [],
                id: 4,
                data: {
                    image: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=709&q=80"
                }
            }];
            let task = tasks[Math.floor(Math.random() * tasks.length)];
            let project_id = req.params.project_id;
            let workerPK = req.session.passport.user.id

            if (project_id == '_covidn2021') {




                task = await db.getTrivialDataFromTable(project_id)
                console.log(task)
                res.send(task);
                return
            }

            
        } else {
            res.send("Authentication failure");
        }
        
    },

    app.post('/api/data/:project_id', async function(req, res) {
        if (req.isAuthenticated()) {

            var project_id = req.params.project_id;

            var data = req;
            console.log("Received data from client: ", data.body);

            var receivedData = data.body;

            if(receivedData.value !== 1) {
                var insertResult = await  db.insertIntoTable(project_id, receivedData);
                console.log("insertResult: ", insertResult);
            }

            var dataFromDb = await db.getDataFromTable(project_id);
            if (dataFromDb === undefined) {
                res.send({value: "none"});
                return
            }

            let workerPK = req.session.passport.user.id;
            let noWorkDone = await db.numberOfWorkDone(workerPK, project_id);
            noWorkDone = noWorkDone.count;

            console.log("dataFromDb: ", dataFromDb);
            console.log("noWorkDone", noWorkDone);

            var task = {
                workerPk: workerPK,
                workerID: req.session.passport.user.username,
                workerName: req.session.passport.user.full_name,
                noWorkDone: noWorkDone,
                completions: [],
                predictions: [],
                id: dataFromDb.id,
                data: {
                    url: dataFromDb.url
                }
            }
            res.send(task);
        } else {
            res.redirect('/login')
        }
    })
    
    );
}

function convertImageDataToTaskFormat(img_id, img_url) {
    return {
        completions: [],
        predictions: [],
        id: img_id,
        data: {
            image: img_url
        }
    }
}



