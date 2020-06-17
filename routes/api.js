var path = require('path')

module.exports = function (app) {
    app.get('/api/get_new_data', function (req, res) {
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
        
    });
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



