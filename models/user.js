
module.exports = class User{
    constructor(userjson) {
        this.username = userjson.username;
        this.email = userjson.email;
        this.address = userjson.address;
        this.role = userjson.role;
        this.fullname = userjson.full_name;
        this.lastlogin = userjson.lastlogin;
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