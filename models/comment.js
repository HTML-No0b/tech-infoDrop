const { Model, Datatypes } = require("sequelize");
const sequelize = require("../config/config");

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    postID: {
      type: DataTypes.TEXT,
      allowNull: true,
      references: {
        model: "user",
        key: "id",
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "post",
    freezeTableName: true,
  }
);
