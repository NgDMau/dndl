module.exports = {
    generateRandomProjectID: async function () {
        var IDs ;
        await getAllID()
        .then((res) => {
            IDs = res;
        });

        var randomID =  this.newID()
        // console.log("ID array is: ", IDs)

        while (IDs.find(element => element.id === randomID)) {
            console.log("coincident!")
            randomID = this.newID()
        }

        return randomID
    },

    newID: function () {
        // Math.random should be unique because of its seeding algorithm.
        // Convert it to base 36 (numbers + letters), and grab the first 9 characters
        // after the decimal.
        return '_' + Math.random().toString(36).substr(2, 9);
    }
}

async function getAllID () {
    var db = require('./db');
    var result 
    await db.getColumnOfTable('id', 'projects_metadata')
    .then(
        (res) => {
            console.log(res);
            if (!res.rows) {
                return false;
            }
            result =  res.rows
        }
    )
    return result
}

async function insertCovidSoundToDB(file_name) {
    var db = require('./db');
    var fs = require('fs');
    let pool = db.getPgPool();
    let client = await pool.connect()
    var objs;
    fs.readFile(file_name, 'utf8', function (err, data) {
    if (err) throw err;
        objs = JSON.parse(data);
        objs.forEach(async function(obj) {
            let patient_id = obj.id;
            let patient_info = obj;
            let cmd = "INSERT INTO projects._covidn2021(patient_id, patient_info) VALUES($1, $2)";
            let values = [patient_id, patient_info];
            let result = await client.query(cmd, values);
            console.log(result);
            return
        })
    return
    });
}

// insertCovidSoundToDB('train_data_negative.json')