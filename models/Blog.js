const Sequelize = require("sequelize");
const sequelize = require("../utils/database");

const Blog = sequelize.define(
  "blogs",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: "Blog Title",
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    media: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    type: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    userId: {
      type: Sequelize.INTEGER,
      references: { model: "blog", key: "id" },
      allowNull: false,
    },
    categoryId: {
      type: Sequelize.INTEGER,
      references: { model: "categories", key: "id" },
      allowNull: false,
    },
    islatest: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: true,
    }
  }

);

module.exports = Blog;
