const { Model, Datatypes } = require("sequelize");
const sequelize = require("../config/config");

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: Datatypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    commentInput:{  
      type:Datatypes.STRING,
      allowNull:false,
      validate:{len:[1]}


    },
    postID: {
      type: Datatypes.TEXT,
      references: {
        model: "user",
        key: "id"
      }
    },
    userId: {
      type: Datatypes.INTEGER,
      references: {
        model: "user",
        key: "id"
      }
    },
  },
  {
    sequelize,
    modelName: "comment",
    freezeTableName: true
  }
);


module.exports = Comment;