const sequelize = require("../config/config")
const {Model,Datatypes} = require("sequelize")

class Comment extends Model{}

Comment.init(
  {
    id: {
      type:Datatypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
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
    }
  },
  {
    sequelize
  }
)
module.exports = Comment