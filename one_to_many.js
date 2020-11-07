const config = require('./config/config.json')["development"];
var Sequelize = require('sequelize'); console.log(config);

// creating connection with mysql
var connection = new Sequelize('development','root','1234',{...config});

const Tutorial = connection.define("tutorial", { ... })
const Comment = connection.define("comment", { ... })

Tutorial.hasMany(Comment, { as: "comments" });
Comment.belongsTo(Tutorial, {
  foreignKey: "tutorialId",
  as: "tutorial",
});

Tutorial.create({
  title: "title",
  description: "description",
})

Comment.create({
  name: "name",
  text: "text",
  tutorialId: 42,
})
//Then show the tutorial

Tutorial.findByPk(tutorialId, { include: ["comments"] });
Tutorial.findAll({ include: ["comments"] });