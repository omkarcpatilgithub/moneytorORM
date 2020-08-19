// 
// const config = require('./config/config.json')[process.env.NODE_ENV];
const config = require('./config/config.json')["development"];
var Sequelize = require('sequelize'); console.log(config);	

// creating connection with mysql 
var connetion = new Sequelize('demo_schema','root','1234',{...config});

// to define a model in sequelize, .define() method
var Article = connetion.define('article',{  // makes article the name of the model
	title: {
	type: Sequelize.STRING,	// all properties for medol/ database table
},
	body: {
	type: Sequelize.TEXT,	
}
});



// this creates a database if there is nothing created 
// connetion.sync({
// 	force: true,
// 	logging: console.log
// }); 


// this will populate the table article with given data
connetion.sync().then(function () {
	Article.create({
		title: 'some title',
		body: 'some long body for some title'

	});
});


// to find an entry with id
// connetion.sync().then(function () {
// 	Article.findById(1).then(function(article){
// 		console.log(article.dataValues)
// 	})
// })