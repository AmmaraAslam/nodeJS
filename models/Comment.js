const Sequelize = require("sequelize");
const sequelize = require("../utils/database");

const Comment = sequelize.define("comments", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  comment: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: null,
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  blogId: {
    type: Sequelize.INTEGER,
    references: { model: "blog", key: "id" },
    allowNull: false,
  },
  commentBy: {
    type: Sequelize.INTEGER,
    references: { model: "users", key: "id" },
    allowNull: false,
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  updatedAt: {
    type: Sequelize.DATE,
    allowNull: true,
  }

});

module.exports = Comment;
