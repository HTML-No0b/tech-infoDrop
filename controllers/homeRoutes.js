const router = require("express").Router()

const {Post,User} = require('../models')
const withAuth = require('../utils/auth')

router.get('/', async (req, res) => {
    try {
      const dbPostData = await Gallery.findAll({
        include: [
          {
            model: Post,
            attributes: ['filename', 'description'],
          },
        ],
      });
  
      const posts = dbPostData.map((gallery) =>
        posts.get({ plain: true })
      );
  
      res.render('homepage', {
        posts,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });


  router.get('/post/:id', withAuth, async (req, res) => {
    try {
      const dbPostData = await Post.findByPk(req.params.id, {
        include: [
          {
            model: Post,
            attributes: [
              'id',
              'title',
              'artist',
              'exhibition_date',
              'filename',
              'description',
            ],
          },
        ],
      });
  
      const gallery = dbPostData.get({ plain: true });
      res.render('Posts', { Post, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });