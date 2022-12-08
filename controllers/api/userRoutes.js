const router = require("express").Router();
const { User } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const dbPostData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    req.session.save(() => {
      req.session.loggedIn = true;
      res.status(200).json(dbPostData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/login', async (req,res)=>{
    try{
        const dbPostData = await User.findOne({
            where:{
                email: req.body.email,
            }
        });
        if (!dbPostData){
            respose
            .status(400)
            .json({message: 'Wrong Email or Password. Try again.'})
            return;
        }
        const correctPassword = await dbPostData.checkPassword(res.body.password);
        if(!correctPassword){
            respose
            .status(400)
            .json({message: 'Wrong Email or Password. Try again.'})
            return;
        }


    }
})