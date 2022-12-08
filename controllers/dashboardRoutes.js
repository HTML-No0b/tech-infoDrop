const router = require("express").Router();
const { where } = require("sequelize");
const sequelize = require("../config/config");
const { User, Post, Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, (req, res) => {
  Post.findAll({
    where: {
      userID: req.session.userID,
    },
    attributes: ["id", "title", "post", "created_at"],
    include: [
      {
        model: User,
        attributes: ["id", "username", "github", "email"],
      },
      {
        model: Comment,
        attributes: ["id", "post", "userID", createdAt],
        include: [
          {
            model: User,
            attributes: ["id", "username", "github", "email"],
          },
        ],
      },
    ],
  });
});
