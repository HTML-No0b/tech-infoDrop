const User = require('./user')
const Post = require('./post')
const Comment = require('./comment')

User.hasMany(Post,{
    forienKey:"user_id"
});
Post.belongsTo(User,{
    forienKey:"user_id"
})

Comment.belongsTo(User,{
    forienKey:"post_id"
})

Comment.belongsTo(User,{
    forienKey:"user_id"
})

User.hasMany(Comment,{
    forienKey:"user_id"
})







module.exports = {User,Comment,Post}