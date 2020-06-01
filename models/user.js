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

    getScore() {
        // Code here
        return
    }

    setScore() {
        // Code here
        return
    }

    createProject() {
        
    }



    
}