



var Sequelize = require('sequelize');

// creating connection with mysql 
var connetion = new Sequelize('demo_schema','root','1234');

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
connetion.sync({
	force: true,
	logging: console.log
}); 