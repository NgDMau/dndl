module.exports = function(app) {
    app.get('/review', async function(req, res) {
        if(req.isAuthenticated) {
            var projectID = req.query.project_id;
        }
    })
}