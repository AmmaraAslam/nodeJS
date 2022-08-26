// "use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("blog", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
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
        references: { model: "users", key: "id" },
        allowNull: false,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references: { model: "categories", key: "id" },
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: new Date(),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("blog");
  }
};
