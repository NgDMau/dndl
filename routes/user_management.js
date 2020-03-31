var path = require('path');
var User = require('../models/user')
var Pool = require('pg-pool')

const pool = new Pool({
    user: 'mpndhiboquobry',
    password: '92cf533ac275e9f7a116c6eb8e79477b3fa074679712bf8165a08f834db679f5',
    host: 'ec2-3-229-210-93.compute-1.amazonaws.com',
    port: '5432',
    database: 'd5tabqes3975',
    ssl: true
});

module.exports = function ( app ) {
  
    app.get('/user_management', function (req, res) {
        if (req.isAuthenticated()) {

            var user = new User(req.session.passport.user)
            console.log(user)
            if (user.isMod()) {
                
    
                pool.connect(function (err, client, done) {
                    if (err) {
                        return console.error(err);
                    }

                    client.query('SELECT * FROM users WHERE role NOT LIKE $1',['admin'], function (err, result) {
                        if (err) {
                            return console.error(err);
                        }
                        console.log(result)
                        res.render("user_management.ejs", {list:result, username:req.session.passport.user.username})
                    });
                })
            } else {
                res.redirect('/login');
            }
            
        } else {
            res.redirect('/login')
        }      
    });
    
    app.post('/user_management/add', function (req, res) {
        if (req.isAuthenticated()) {

            var user = new User(req.session.passport.user)
            console.log(user)
            if (user.isMod()) {  
                pool.connect(function (err, client, done) {
                    var username = req.body.username;
                    var full_name = req.body.full_name;
                    var email = req.body.email;
                    var address = req.body.address;
                    var role = req.body.role;
                    
                    if (err) {
                        return console.error(err);
                    }
            
                    client.query('INSERT INTO users(username, full_name, email, address, role) VALUES($1, $2, $3, $4, $5)',[username, full_name, email, address, role], function (err) {
                        if (err) {
                            return console.error(err);
                        }
                        client.query('SELECT * FROM users WHERE role NOT LIKE $1',['admin'], function (err, result) {
                            if (err) {
                                return console.error(err);
                            }
                            console.log(result)
                            res.render("user_management.ejs", {list:result, username:req.session.passport.user.username})
                        });
                    });
                })
            } else {
                res.redirect('/login');
            }
            
        } else {
            res.redirect('/login')
        } 
    });
    
    app.get('/user_management/add', function (req, res) {
        
    
        pool.connect(function (err, client, done) {
            if (err) {
                return console.error(err);
            }
    
            client.query('SELECT * FROM users WHERE role NOT LIKE $1',['admin'], function (err, result) {
                if (err) {
                    return console.error(err);
                }
                console.log(result)
                res.render("user_management.ejs", {list:result, username:req.session.passport.user.username})
            });
        })
    });
    
    app.post('/user_management/edit', function (req, res) {
        if (req.isAuthenticated()) {

            var user = new User(req.session.passport.user)
            console.log(user)
            if (user.isMod()) {
                pool.connect(function (err, client, done) {
                    var id = req.body.id;
                    var username = req.body.username;
                    var full_name = req.body.full_name;
                    var email = req.body.email;
                    var address = req.body.address;
                    var role = req.body.role;
                    
                    if (err) {
                        return console.error(err);
                    }
            
                    client.query('UPDATE users SET username = $1, full_name = $2, email = $3, address = $4, role = $5  WHERE id=$6',[username, full_name, email, address, role, id], function (err) {
            
                        client.query('SELECT * FROM users WHERE role NOT LIKE $1',['admin'], function (err, result) {
            
                            if (err) {
                                return console.error(err);
                            }
                            res.render("user_management.ejs", {list:result, username:req.session.passport.user.username})
                        });
                    });
                })
            } else {
                res.redirect('/login');
            }
            
        } else {
            res.redirect('/login')
        }
    
    });
    
    app.get('/user_management/add', function (req, res) {
        if (req.isAuthenticated()) {

            var user = new User(req.session.passport.user)
            console.log(user)
            if (user.isMod()) {
                
    
                pool.connect(function (err, client, done) {
                    if (err) {
                        return console.error(err);
                    }
            
                    client.query('SELECT * FROM users WHERE role NOT LIKE $1',['admin'], function (err, result) {
                        if (err) {
                            return console.error(err);
                        }
                        console.log(result)
                        res.render("user_management.ejs", {list:result, username:req.session.passport.user.username})
                    });
                })
            } else {
                res.redirect('/login');
            }
            
        } else {
            res.redirect('/login')
        }
    });
    
    app.post('/user_management/delete', function (req, res) {
        if (req.isAuthenticated()) {

            var user = new User(req.session.passport.user)
            console.log(user)
            if (user.isMod()) {
                
    
                pool.connect(function (err, client, done) {
                    var id = req.body.id;
            
                    client.query('DELETE FROM users WHERE id=$1',[id], function (err) {
            
                        client.query('SELECT * FROM users WHERE role NOT LIKE $1',['admin'], function (err, result) {
            
                            if (err) {
                                return console.error(err);
                            }
                            res.render("user_management.ejs", {list:result, username:req.session.passport.user.username})
                        });
                    });
                })
            } else {
                res.redirect('/login');
            }
            
        } else {
            res.redirect('/login')
        }
    });
    
    app.get('/user_management/delete', function (req, res) {
        if (req.isAuthenticated()) {

            var user = new User(req.session.passport.user)
            console.log(user)
            if (user.isMod()) {
                
    
                pool.connect(function (err, client, done) {
                    if (err) {
                        return console.error(err);
                    }
            
                    client.query('SELECT * FROM users WHERE role NOT LIKE $1',['admin'], function (err, result) {
                        if (err) {
                            return console.error(err);
                        }
                        console.log(result)
                        res.render("user_management.ejs", {list:result, username:req.session.passport.user.username})
                    });
                })
            } else {
                res.redirect('/login');
            }
            
        } else {
            res.redirect('/login')
        }
        
    });

    app.post('/user_management/find', function (req, res) {
        if (req.isAuthenticated()) {

            var user = new User(req.session.passport.user)
            console.log(user)
            if (user.isMod()) {
                
    
                pool.connect(function (err, client, done) {
                    var row = req.body.row || 'username';
                    var search = req.body.search;
                    
                    const query = "SELECT * FROM users WHERE "+row+" LIKE \'%"+search+"%\'"
            
                    client.query(query, function (err,result) {

                        if (err) {
                            return console.error(err);
                        }

                        res.render("user_management.ejs", {list:result, username:req.session.passport.user.username})

                    });
                })
            } else {
                res.redirect('/login');
            }
            
        } else {
            res.redirect('/login')
        }
    });
    
    app.get('/user_management/find', function (req, res) {
        if (req.isAuthenticated()) {

            var user = new User(req.session.passport.user)
            console.log(user)
            if (user.isMod()) {
                
    
                pool.connect(function (err, client, done) {
                    if (err) {
                        return console.error(err);
                    }
            
                    client.query('SELECT * FROM users WHERE role NOT LIKE $1',['admin'], function (err, result) {
                        if (err) {
                            return console.error(err);
                        }
                        console.log(result)
                        res.render("user_management.ejs", {list:result, username:req.session.passport.user.username})
                    });
                })
            } else {
                res.redirect('/login');
            }
            
        } else {
            res.redirect('/login')
        }
        
    });
}