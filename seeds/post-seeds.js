const { Post } = require("../models");

const postData = [
	{
		title: "Why MVC is so important",
		description:
			"MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.",
		user_id: 1,
	},
	{
		title: "Authentication vs. Authorization",
		description:
			"There is a difference between authentication and authorization. Authentication means confirming your own identity, whereas authorization means being allowed access to the system.",
		user_id: 2,
	},
	{
		title: "Object-Relational Mapping",
		description:
			"I have really loved learning about ORMs. It is really simplified the way I create queries in SQL!",
		user_id: 3,
	},
];

const postSeeds = () => Post.bulkCreate(postData);

module.exports = postSeeds;
