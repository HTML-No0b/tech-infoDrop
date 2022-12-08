const router = require('express').Router();
const {User}= require('../../models')

router.post('/', async (req,res) => {
    try{ 
        const dbPostData = await User.create({
            username:req.body.username,
            email:req.body.email,
            password: req.body.password
        })
    } catch(err){
        console.log(err);
        res.status(500).json(err)
    }
});