const db = require('./db');

module.exports = class User{
    constructor(userjson) {
        this.username = userjson.username;
        this.email = userjson.email;
        this.address = userjson.address;
        this.role = userjson.role;
        this.fullname = userjson.full_name;
        this.lastlogin = userjson.lastlogin;
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

    async owns(project_id) {
        await db.getAllProjectsOf(this.username)
        .then((res) => {
            console.log(res);
        })
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