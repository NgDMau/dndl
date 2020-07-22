var path = require('path')
var Pool = require('pg-pool')
var send_mail = require('../../models/send_mail')

email_from = process.env.EMAIL_USERNAME || "inlabvietnam";
pass_email = process.env.EMAIL_PASSWORD || "Nisci123";

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    ssl: true //(process.env.DB_SSL == 'true')
});

module.exports = function(app) {

app.get('/signup', function(req, res) {
    res.render('signup.ejs', {notification: ""});
});

app.post('/signup', function(req, res) {

    var username = req.body.email;
    var email = req.body.email;
    var company = req.body.company;
    var phone = req.body.sdt;
    var password = req.body.password[0];

    
    create_new_customer()
        .then(function(result){
            
            if (result.name === 'error') {
                if (result.code === '23505') {
                    var description = `Rất tiếc, địa chỉ ${email} đã được đăng ký!`
                }
                res.render('signup.ejs', {notification: description});
                return Promise.reject('The email address already exists.')
            }
            return true
        })
        .then(function(proceed_to_verify) {
            if (proceed_to_verify) {
                send_mail(email_from, pass_email, username, email);
                res.render('signup_success.ejs')
                return
            }

            res.render('signup.ejs', {notification: "Rất tiếc, đã xảy ra lỗi!"});
            return Promise.reject('Error might occured.')           
        })


        

        async function create_new_customer() {
            const client = await pool.connect();
            try {
                var cmd = 'INSERT INTO customers("username","email","password","company","phone") VALUES($1,$2,$3,$4,$5)';
                var values = [username, email, password, company, phone];
                var result = await client.query(cmd, values);
                client.release();
                return result;
            } catch (e) {
                client.release();
                console.log(e)
                return e;
            }
        }

    // find_username_in_db()
    // .then(function(result){

    //     console.log(result.rows)
    //     if (result.rows.length > 0) {
            
    //         return
    //     }

        
    // })


    // Step 2:  
    // we will decide to create a new cusotmer or not
    // .then(function(customer_existed){ 
        
    //     if (!customer_existed) {
    //         create_new_customer()
    //         .then(function(result){
                
    //             if (result.name === 'error') {
    //                 return false
    //             }
    //             return true
    //         })
    //         .then(function(proceed_to_verify) {
    //             if (proceed_to_verify) {
    //                 send_mail(email_from, pass_email, username, email);
    //                 res.render('signup_success.ejs')
    //                 return
    //             }

    //             res.render('signup.ejs', {notification: "Rất tiếc, đã xảy ra lỗi!"});
    //             return           
    //         })
    //     }

    //     res.render('signup.ejs', {notification: "Rất tiếc, địa chỉ email này đã được đăng ký!"});
    //     return
    // })
    

    // async function find_username_in_db() {
    //     const client = await pool.connect();
    //     try {
    //         var cmd = "SELECT 'id' FROM customer WHERE 'username'=$1";
    //         var values = [username];
    //         var result = await client.query(cmd, values);
    //         client.release();
    //         return result
    //     }   catch (e) {
    //         client.release();
    //         console.log(e)
    //         return e;
    //     }
    // }

    // creat_customer();
    // async function creat_customer() {
    //     const client = await pool.connect();
    //     try {
    //         await client.query('BEGIN');
    //         await client.query('SELECT "id" FROM customer WHERE "username"=$1', [username], async function(err, result) {
    //             if (err) {
    //                 client.release();
    //                 res.render('signup.ejs');
    //             }
    //             if (result.rows[0] == null) {
    //                 console.log("success")
    //                 send_mail(email_from, pass_email, username, email);
    //                 res.render('signup_success.ejs')
    //                 await client.query('INSERT INTO customer("username","email","password","company","phone") VALUES($1,$2,$3,$4,$5)', [username, email, password, company, phone]);
    //                 client.release();
    //             } else {
    //                 res.render('signup.ejs');
    //             }
    //         })
    //     } catch ( e ) {
    //         throw (e);
    //     }

    // }

// res.render('signup.ejs')
})
}
