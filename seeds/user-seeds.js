const sequelize = require("../config/connection");
const { User, Post } = require("../models");

const userData = [
	{
		username: "johncena",
		email: "cantseeme@nowhere.com",
		password: "password123",
	},
	{
		username: "jamesbond",
		email: "jamesbond@007.com",
		password: "doubleo7",
	},
	{
		username: "goku-son",
		email: "ssgoku@dragonball.com",
		password: "7dragonballs",
	},
];

const userSeeds = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = userSeeds;
