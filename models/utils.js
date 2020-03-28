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