// 
// const config = require('./config/config.json')[process.env.NODE_ENV];
const config = require('./config/config.json')["development"];
var Sequelize = require('sequelize'); console.log(config);

// creating connection with mysql 
var connection = new Sequelize('development','root','1234',{...config});

// to define a model in sequelize, .define() method
var Article = connection.define('article',{  // makes article the name of the model
	title: {
	type: Sequelize.STRING,	// all properties for medol/ database table
},
	body: {
	type: Sequelize.TEXT,	
}
//    approved: {
//    type: Sequelize.BOOLEAN,
//    defaultValue: false
//    }
});



// this creates a database if there is nothing created 
// connetion.sync({
// 	force: true,
// 	logging: console.log
// }); 



// this will populate the table article with given data
//connetion.sync().then(function () {
//	Article.create({
//		title: 'some title',
//		body: 'some long body for some title'
//
//	});
//});

//// this is mostly used for many to many relations
//connection.sync({
//force: true
//})
//.then(function () {
//var articleInstance = Article.build({
//    title: 'SOme title',
//    body: 'SOme body'
//})
//articleInstance.save()
//})


// to find an entry with id
connection.sync().then(function () {
Article.findById(1).then(function(article){
    console.log(article.dataValues)
})
})