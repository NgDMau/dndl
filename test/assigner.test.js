const assert = require('assert');

const assigner = require('../models/assigner');

const user_id = "3";
const project_id = "_fahgsyaeg";

describe('Simple array response test', () => {
    it('Should be an array',  function() {
        return assigner.getUnlabeledData(user_id, project_id)
        .then(result => {
            console.log(result.rows)
            assert.equal(result.rows.constructor.name, "Array");
        })
    })
})