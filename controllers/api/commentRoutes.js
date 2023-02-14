const router= requrie('express').Router()
const {Comment} = require ('../../models')
const withAuth = require('../../utils')


router.get('/',(req,res)=>{
    Comment.findAll()
    .then(dbCommentdata => res.json(dbCommentdata)
    .catch(err=>))
})