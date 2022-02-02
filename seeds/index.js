const userSeeds = require("./user-seeds");
const postSeeds = require("./post-seeds");
const commentSeeds = require("./comment-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
	await sequelize.sync({ force: true });
	console.log("==============");
	await userSeeds();
	console.log("==============");

	await postSeeds();
	console.log("==============");

	await commentSeeds();
	console.log("==============");

	process.exit(0);
};

seedAll();
