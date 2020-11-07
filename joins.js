const config = require('./config/config.json')["development"];
var Sequelize = require('sequelize'); console.log(config);

// creating connection with mysql
var connection = new Sequelize('development','root','1234',{...config});



// to define a model in sequelize, .define() method
var User = connection.define('User',{
    username: { type: Sequelize.STRING},
    email: { type: Sequelize.STRING},
    password: { type: Sequelize.STRING},
    sex : { type: Sequelize.STRING},
    day_birth: { type: Sequelize.INTEGER},
    month_birth: { type: Sequelize.INTEGER},
    year_birth: { type: Sequelize.INTEGER}

});

// this creates a database if there is nothing created
 User.sync({
// 	force: true,
 	logging: console.log
 });


var Post = connection.define("Post",{
    body: { type: Sequelize.TEXT },
    user_id: { type: Sequelize.INTEGER},
    likes: { type: Sequelize.INTEGER, defaultValue: 0 },

});


// this creates a database if there is nothing created
 Post.sync({
// 	force: true,
 	logging: console.log
 });



//// Fill up data in Users table
//connection.sync().then(function () {
//	User.create({
//		username: 'ocpatil',
//        email: 'ocpatil@gmail.com',
//        password: '1234',
//        sex : 'M',
//        day_birth: '30',
//        month_birth: '05',
//        year_birth: '1995'
//
//	});
//});



// Fill up data in Post table
//connection.sync().then(function () {
//	Post.create({
//		body: 'Amazon giving dewali sale',
//        user_id: '1',
//        likes: '110'
//
//	});
//});


User.hasMany(Post, {foreignKey: 'user_id'})
Post.belongsTo(User, {foreignKey: 'user_id'})

//Post.find({ where: { ...}, include: [User]})


//// To get inner join on post
//Post.findAll({
//  include: [{
//    model: User,
//    required: true
//   }]
//}).then(posts => {
//  console.log()
//});

// To get left outer join on post
//Post.findAll({
//  include: [{
//    model: User,
////  required: false
//   }]
//}).then(posts => {
//  /* ... */
//});


// Posts belonging to users whose birth year is in 1995
//Post.findAll({
//  include: [{
//    model: User,
//    where: {year_birth: 1995}
//   }]
//}).then(posts => {
//  /* ... */
//});


//
Post.findAll({
  include: [{
    model: User,
    where: {year_birth: 1995},
    required: false
   }]
}).then(posts => {
  /* ... */
});