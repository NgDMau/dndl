const { DataTypes } = require('sequelize');

// We export a function that defines the model.
// This function will automatically receive as parameter the Sequelize connection object.
module.exports = (sequelize) => {
	sequelize.define('user', {
		// The following specification of the 'id' attribute could be omitted
		// since it is the default.
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		username: {
			type: DataTypes.CHAR,
			allowNull: false,
			unique: true,
		},
		email: {
			type: DataTypes.CHAR,
			allowNull: false,
			unique: true,
		},
		password: {
			type: DataTypes.CHAR,
			allowNull: false,
		},
		address: {
			type: DataTypes.CHAR,

		},
		role: {
			type: DataTypes.CHAR,
			allowNull: false,
		},
		full_name: {
			type: DataTypes.CHAR,

		},
		last_login: {
			type: DataTypes.DATE,

		},
		verify: {
			type: DataTypes.INTEGER,

		},



    },
    {timestamps: false});
};