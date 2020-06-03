const assert = require('assert');

const assigner = require('../models/assigner');

const user_id = "3";
const project_id = "sentimente";

describe('Simple array response test', () => {
    it('Should be an array',  function() {
        return assigner.getDataToLabel(user_id, project_id)
        .then(result => {
            assert.equal(result.rows.constructor.name, "Array");
        })
    })
})