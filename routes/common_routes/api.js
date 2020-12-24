const path = require('path');
const db = require('../../models/db');

module.exports = function (app) {
    app.get('/api/data/:project_id', async function (req, res) {
        if (req.isAuthenticated()) {
            let result = await db.getDataFromTable('_asl2020ok');
            console.log("task here", result);
            if(result.code === 'OUT_OF_STOCK') {
                res.send({
                    code: 'OUT_OF_STOCK'
                })
                return
            }
            let task = {
                code: 'OK',
                id: result.data.id,
                url: result.data.url
            }
            console.log("result ", result, "/ntask", task);
            res.send(task);
        } else {
            res.send("Authentication failure");
        }
        
    },
    
    app.post('/api/data/:project_id', async function(req, res) {
        if (req.isAuthenticated()) {
            var data = req;
            var project_id = data.params.project_id;
            console.log("project_id", project_id)
            console.log("Received data from client: ", data.body);

            var receivedData = data.body;

            if(!receivedData.skip) {
                var insertResult = await db.insertIntoTable(project_id, receivedData);
                console.log("insertResult: ", insertResult);
                if (insertResult.command === 'UPDATE') {
                    res.send({code: 'OK'})
                    return
                }
                console.log("insertResult: ", insertResult);
                res.send({code: 'FAILED'})
                return
            }
        } else {
            res.redirect('/login')
        }
    }),


    // app.post('/api/data/:project_id', async function(req, res) {
    //     if (req.isAuthenticated()) {

    //         var project_id = req.params.project_id;

    //         var data = req;
    //         console.log("Received data from client: ", data.body);

    //         var receivedData = data.body;

    //         if(receivedData.value !== 1) {
    //             var insertResult = await  db.insertIntoTable("audio_transcription", receivedData);
    //             console.log("insertResult: ", insertResult);
    //         }

    //         var dataFromDb = await db.getDataFromTable("audio_transcription");
    //         if (dataFromDb === undefined) {
    //             res.send({value: "none"});
    //             return
    //         }
    //         console.log("dataFromDb: ", dataFromDb);

    //         //console.log("FULLNAME: ", req.session.passport.user);

    //         var task = {
    //             workerPk: req.session.passport.user.id,
    //             workerID: req.session.passport.user.username,
    //             workerName: req.session.passport.user.full_name,
    //             completions: [],
    //             predictions: [],
    //             id: dataFromDb.id,
    //             data: {
    //                 audio: dataFromDb.audio
    //             }
    //         }
    //         res.send(task);
    //     } else {
    //         res.redirect('/login')
    //     }
    // })
    
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



