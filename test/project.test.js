async function registerLabelsToDb (project_id, project_labels) {
    var pool = require('../models/db').getPool(); 
    var cmd = "UPDATE projects_metadata SET labels=$1 WHERE id=$2";
    var values = [project_labels, project_id];
    var client = await pool.connect();
    var result = await client.query(cmd, values);
    return result;
}

registerLabelsToDb('_t4snjbsfx', ['tichcuc', 'tieucuc', 'trungtinh'])
    .then(console.log)