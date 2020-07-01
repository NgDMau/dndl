async function registerLabelsToDb (project_id, project_labels) {
    var pool = require('../models/db').getPool(); 
    var cmd = "UPDATE projects_metadata SET labels=$1 WHERE id=$2";
    var values = [project_labels, project_id];
    var client = await pool.connect();
    var result = await client.query(cmd, values);
    return result;
}

async function test_registerLabelsToDb() {
    registerLabelsToDb('_t4snjbsfx', ['tichcuc', 'tieucuc', 'trungtinh'])
    .then(console.log)
}

async function test_destroy() {
    var Project = require('../models/project');
    var test_project = new Project({id: '_yqks7xtty'})
    var result = await test_project.destroy();
    return result
}

test_destroy()
    .then(console.log)




