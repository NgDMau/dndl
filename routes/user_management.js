var path = require('path');
var User = require('../models/user')
var Pool = require('pg-pool')
const flash = require('connect-flash');

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    ssl: { rejectUnauthorized: false }
});

module.exports = function ( app ) {

    app.use(flash())
  
    app.get('/user_management', function (req, res) {
        if (req.isAuthenticated()) {

            var user = new User(req.session.passport.user)
            
            if (user.isMod()) {
                
    
                pool.connect(function (err, client, done) {
                    if (err) {
                        return console.error(err);
                    }

                    client.query('SELECT * FROM users WHERE role NOT LIKE $1',['admin'], function (err, result) {
                        if (err) {
                            client.release();
                            return console.error(err);
                        }
                        client.release();
                        const mess = req.flash('mess');
                        console.log(mess)
                        res.render("user_management.ejs", {list:result, username:req.session.passport.user.username, mess:mess })
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
            
            if (user.isMod()) {  
                pool.connect(function (err, client, done) {
                    var username = req.body.username;
                    var full_name = req.body.full_name;
                    var email = req.body.email;
                    var address = req.body.address;
                    var role = req.body.role;
                    if (role === 'admin') {
                        role = 'moderator'
                    }
                    
                    if (err) {
                        return console.error(err);
                    }

                    client.query('SELECT exists (SELECT 1 FROM users WHERE username = $1 LIMIT 1)',[username], function (err,result) {  
                        console.log(result.rows[0].exists)                 
                        if (result.rows[0].exists == true){
                            client.release();
                            req.flash('mess','Tên tài khoản đã tồn tại')
                            res.redirect('/user_management');
                        }else{
                            client.query('INSERT INTO users(username, full_name, email, address, role) VALUES($1, $2, $3, $4, $5)',[username, full_name, email, address, role], function (err) {
                                if (err) {
                                    client.release();
                                    return console.error(err);
                                }
                                    client.release();
                                    req.flash('mess','Thêm tài khoản thành công')
                                    res.redirect('/user_management');
        
        
                            });

                        }

                    });
                })
            } else {
                res.redirect('/login');
            }
            
        } else {
            res.redirect('/login')
        } 
    });
    
    app.post('/user_management/edit', function (req, res) {
        if (req.isAuthenticated()) {

            var user = new User(req.session.passport.user)
            
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

                    client.query('SELECT exists (SELECT 1 FROM users WHERE username = $1 and id != $2 LIMIT 1)',[username, id], function (err,result) {  
                        console.log(result.rows[0].exists)                 
                        if (result.rows[0].exists == true){
                            client.release();
                            req.flash('mess','Tên tài khoản đã tồn tại')
                            res.redirect('/user_management');
                        }else{
                            client.query('UPDATE users SET username = $1, full_name = $2, email = $3, address = $4, role = $5  WHERE id=$6',[username, full_name, email, address, role, id], function (err) {

                                client.release();
                                req.flash('mess','Sửa thông tin tài khoản thành công')
                                res.redirect('/user_management');
    
                            });

                        }

                    });

                })
            } else {
                res.redirect('/');
            }
            
        } else {
            res.redirect('/')
        }
    
    });
    
    app.get('/user_management/add', function (req, res) {
        if (req.isAuthenticated()) {

            var user = new User(req.session.passport.user)
            
            if (user.isMod()) {

                res.redirect('/user_management');

            } else {
                res.redirect('/');
            }
            
        } else {
            res.redirect('/')
        }
    });
    
    app.post('/user_management/delete', function (req, res) {
        if (req.isAuthenticated()) {

            var user = new User(req.session.passport.user)
            
            if (user.isMod()) {
                
    
                pool.connect(function (err, client, done) {
                    var id = req.body.id;
            
                    client.query('DELETE FROM users WHERE id=$1',[id], function (err) {
            
                            client.release();
                            req.flash('mess','Xóa thông tin tài khoản thành công')
                            res.redirect('/user_management')

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
            
            if (user.isMod()) {

                res.redirect('/user_management')

            } else {
                res.redirect('/');
            }
            
        } else {
            res.redirect('/')
        }
        
    });

    app.post('/user_management/find', function (req, res) {
        if (req.isAuthenticated()) {

            var user = new User(req.session.passport.user)
            
            if (user.isMod()) {
                
    
                pool.connect(function (err, client, done) {
                    var row = req.body.row || 'username';
                    var search = req.body.search;
                    
                    const query = "SELECT * FROM users WHERE "+row+" LIKE \'%"+search+"%\'"
            
                    client.query(query, function (err,result) {

                        if (err) {
                            client.release();
                            return console.error(err);
                        }
                        client.release();
                        res.render("user_management.ejs", {list:result, username:req.session.passport.user.username,mess:req.flash('mess') })

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
            
            if (user.isMod()) {

                res.redirect('/user_management')

            } else {
                res.redirect('/');
            }
            
        } else {
            res.redirect('/')
        }
        
    });
}