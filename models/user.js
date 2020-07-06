const db = require('./db');

module.exports = class User{
    constructor(userjson) {
        this.username = userjson.username;
        this.email = userjson.email;
        this.address = userjson.address;
        this.role = userjson.role;
        this.fullname = userjson.full_name;
        this.lastlogin = userjson.lastlogin;
        this.id = userjson.id;
    }

    async getAllProjectsInfo() {
        var result;
        await db.getAllProjectsOf(this.username)
        .then((res) => {
            //console.log('DB result prjects',res);
            result = res;
        })
        .catch((err) => {
            console.error(err);
            return err;
        })

        return result;
    }

    async getScore() {
        let cmd = "SELECT score FROM public.score WHERE username=$1";
        let values = [this.username];
        let pool = db.getPgPool();
        let client = await pool.connect();
        try{
            let result = await client.query(cmd, values);
            client.release();
            return result.rows[0].score;
        } catch(e) {
            client.release();
            return e;
        }
    }

    async incrementScore(increment) {
        var db = require('./db');
        let current_score = await this.getScore();
        let new_score = current_score + increment;
        let cmd = "UPDATE public.score SET score=$1 WHERE username=$2";
        let values = [new_score, this.username];
        let pool = db.getPgPool();
        let client = await pool.connect();
        try {
            let result = await client.query(cmd, values);
            client.release();
            return result;
        } catch(e) {
            client.release();
            return e;
        }
    }

    isBeginner() {
        return this.role === 'beginner';
    }

    isCustomer() {
        return this.role === 'customer';
    }

    isAdmin() {
        return this.role === 'admin';
    }

    isMod() {
        return this.role === 'moderator';
    }

    isWorker() {
        return this.role === 'worker';
    }

    isNewbie() {
        return (this.role).split('_')[0] === 'level';
    }

    async isOwnerOf(project_id) {
        var user_id = this.id;
        let pool = db.getPgPool();
        let client = await pool.connect();
        let cmd = "SELECT * FROM projects_metadata WHERE id=$1";
        let values = [project_id]
        try {
            let result = await client.query(cmd, values);
            client.release();
            if(result.rows[0].owner_id === user_id) {
                console.log("OWNER_ID: ", result.rows[0].owner_id)
                return true;
            }
            return false;
        } catch(e) {
            client.release();
            return e;
        }
    }

    updateLastlogin() {
        // Code here
        return true
    }



    setScore() {
        // Code here
        return
    }

    createProject() {
        
    }



    
}