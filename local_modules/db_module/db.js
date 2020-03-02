async function getDB(query) {
    const {
        Pool,
        Client
    } = require('pg');
    // let response
    const pool = new Pool({
        user: 'vvdicwtmvinosq',
        host: 'ec2-18-235-97-230.compute-1.amazonaws.com',
        database: 'd9p7d0hvpi42ri',
        password: 'e9179f8811881a2e527c536030e0ac6d4c4eaee84cccbd35f1dd5d7c19769be8',
        port: 5432,
        ssl: true
    })
    let response = await pool.query(query);
    end = await pool.end();
    return response;
}

exports.getRandomSentence = async function() {
    var response = await getDB('SELECT * FROM sentiment');
    highEnd = response.rows.length - 1;
    lowEnd = 0;
    randomIndex = Math.floor(Math.random() * (highEnd - lowEnd) + lowEnd);
    return response.rows[randomIndex]
  }