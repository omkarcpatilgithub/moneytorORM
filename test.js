var Sequelize = require('sequelize');
//console.log(config);

// creating connection with mysql
var connetion = new Sequelize('development','root','1234');


// to define a model in sequelize, .define() method
var Article = connetion.define('article',{  // makes article the name of the model
	title: Sequelize.STRING,
	body: Sequelize.body
});


// this creates a database if there is nothing created
connection.sync().then(function (){

})

// connetion.sync({
// 	force: true,
// 	logging: console.log
// });