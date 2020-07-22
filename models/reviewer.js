const db = require('./db');

module.exports = class Reviewer {
    constructor(reviewer) {
        this.fullname = reviewer.fullname;
        this.email = reviewer.email;
    }

    async getReviewedTasks() {
        await setTimeout(function() {
            console.log("Getting reviewd task...")
        }, 1500);
        /**TODO:
         * query db to get reviewed tasks by this reviewer
         */
        return ['_kjk231tf-14', '_1jsadhj-15']
    }
}
