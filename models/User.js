const Sequelize = require("sequelize");
const sequelize = require("../utils/database");

const User = sequelize.define(
  "users",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    dob: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    country: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    profession: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    image: {
      type: Sequelize.STRING,
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

  },

);

// User.beforeCreate((user) => {
//   const hashPassword = bcrypt.hashSync(user.password, saltRounds);
//   user.password = hashPassword;
// });

// User.hasOne(Role, { sourceKey: "roleId", foreignKey: "id" });

// User.hasOne(Designation, { sourceKey: "designationId", foreignKey: "id" });

module.exports = User;
