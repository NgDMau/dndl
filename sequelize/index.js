const { Sequelize } = require('sequelize');
const { applyExtraSetup } = require('./extra-setup');

const sequelize = new Sequelize('d1r7gpirn3t2e6', 'qrmmeltkivmkot', 'a3582d2e31948a9bdff3cd8e76c3824358a09d8fa2f9cb4d931bb5247f691f7e',{
    port: 5432,
    host: "ec2-18-210-214-86.compute-1.amazonaws.com",
    ssl: true,
    dialect: 'postgres',
    native: true
});

const modelDefiners = [
    require('./model/customer.model'),
    require('./model/user.model'),
	// Add more models here...
	// require('./models/item'),
];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}

// We execute any extra setup after the models are defined, such as adding associations.
applyExtraSetup(sequelize);

// We export the sequelize connection instance to be used around our app.
module.exports = sequelize;