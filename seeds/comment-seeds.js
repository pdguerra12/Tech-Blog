const { Comment } = require("../models");

const commentData = [
	{
		comment_text:
			"Thank you for explaining to me MVC does not stand for Motor Vehicles Commission!",
		user_id: 1,
		post_id: 1,
	},
	{
		comment_text:
			"Now I get the difference between authentication and authorization! Thanks!",
		user_id: 2,
		post_id: 2,
	},
	{
		comment_text: "I can not get enough of ORMs!",
		user_id: 3,
		post_id: 3,
	},
];

const commentSeeds = () => Comment.bulkCreate(commentData);

module.exports = commentSeeds;
