
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
        var db = require('./db');
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

    isCustomer() {
        return this.role === 'customer';
    }

    isAdmin() {
        return this.role === 'admin';
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