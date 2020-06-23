const path = require('path');
const db = require('../models/db');

module.exports = function (app) {
    app.get('/api/data', function (req, res) {
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
            res.send(task);
        } else {
            res.send("Authentication failure");
        }
        
    },
    
    app.post('/api/data', async function(req, res) {
        var data = req;
        console.log("Received data from client: ", data.body);

        var receivedData = data.body;

        if(receivedData.value !== 1) {
            var insertResult = await  db.insertIntoTable("audio_transcription", receivedData);
            console.log("insertResult: ", insertResult);
        }

        var dataFromDb = await db.getDataFromTable("audio_transcription");
        console.log("dataFromDb: ", dataFromDb);

        var task = {
            completions: [],
            predictions: [],
            id: dataFromDb.id,
            data: {
                audio: dataFromDb.url
            }
        }
        res.send(task);
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



