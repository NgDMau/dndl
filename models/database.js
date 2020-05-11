var Pool = require('pg-pool');

const connection = new Pool({
    // user: process.env.user || 'mpndhiboquobry',
    user: process.env.user || 'qrmmeltkivmkot',
    password: process.env.password || 'a3582d2e31948a9bdff3cd8e76c3824358a09d8fa2f9cb4d931bb5247f691f7e',
    host: process.env.host || 'ec2-18-210-214-86.compute-1.amazonaws.com',
    port: process.env.port || '5432',
    database: process.env.database || 'd1r7gpirn3t2e6',
    // password: process.env.password || '92cf533ac275e9f7a116c6eb8e79477b3fa074679712bf8165a08f834db679f5',
    // host: process.env.host || 'ec2-3-229-210-93.compute-1.amazonaws.com',
    // port: process.env.port || '5432',
    // database: process.env.database || 'd5tabqes3975',
    ssl: true
});


