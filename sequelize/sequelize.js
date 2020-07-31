const { Sequelize } = require('sequelize');

// Option 1: Passing a connection URI
// const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite
// const sequelize = new Sequelize('postgres://qrmmeltkivmkot:a3582d2e31948a9bdff3cd8e76c3824358a09d8fa2f9cb4d931bb5247f691f7e@ec2-18-210-214-86.compute-1.amazonaws.com:5432/d1r7gpirn3t2e6') // Example for postgres

// Option 2: Passing parameters separately (sqlite)
// const sequelize = new Sequelize({
//   dialect: 'sqlite',
//   storage: 'path/to/database.sqlite'
// });

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize('d1r7gpirn3t2e6', 'qrmmeltkivmkot', 'a3582d2e31948a9bdff3cd8e76c3824358a09d8fa2f9cb4d931bb5247f691f7e',{
    port: 5432,
    host: "ec2-18-210-214-86.compute-1.amazonaws.com",
    ssl: true,
    dialect: 'postgres',
    native: true
});

var User = sequelize.define('users', {},{timestamps: false});

var user = User.findAll({ 
    where: {id: '1'} ,
    attributes: ['id', 'full_name']
  }).then(function(task) {
  console.log(task)
});
