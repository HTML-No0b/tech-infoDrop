const { Model, Datatypes } = require("sequelize");
const sequelize = require("../config/config");

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: Datatypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    postID: {
      type: Datatypes.TEXT,
      allowNull: true,
      references: {
        model: "user",
        key: "id",
      },
    },
    userId: {
      type: Datatypes.INTEGER,
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


module.exports = Comment