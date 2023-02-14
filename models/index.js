const User = require('./user')
const Post = require('./post')
const Comment = require('./comment')

User.hasMany(Post,{
    forienKey:"user_id"
});
Post.belongsTo(User,{
    forienKey:"user_id"
});

Comment.belongsTo(User,{
    forienKey:"post_id",
    onDelete:'cascade',
    hooks:true
});

Comment.belongsTo(User,{
    forienKey:"user_id",
    onDelete:'cascade',
    hooks:true
})

User.hasMany(Comment,{
    forienKey:"user_id"
})


module.exports = {User,Comment,Post}