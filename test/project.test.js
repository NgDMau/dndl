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

async function getAllProjects() {
    var pool = require('../models/db').getPool(); 
    var cmd = "SELECT tablename FROM pg_catalog.pg_tables where schemaname='projects'";
    var client = await pool.connect();
    var result = await client.query(cmd);
    return result.rows;
}

async function test_destroy(project_id) {
    var Project = require('../models/project');
    var test_project = new Project({id: project_id})
    var result = await test_project.destroy();
    return result
}

// getAllProjects()
//     .then(function(projects_list) {
//         projects_list.forEach(function(item, index, array){
//             test_destroy(item.tablename)
//                 .then(console.log)
//         })
//     })




