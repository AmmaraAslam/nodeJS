// "use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("comment", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      comment: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "Blog Comments",
      },
      blogId: {
        type: Sequelize.INTEGER,
        references: { model: "blog", key: "id" },
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: { model: "users", key: "id" },
        allowNull: false,
        comment: "It will be the user who commented"
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("comment");
  }
};
