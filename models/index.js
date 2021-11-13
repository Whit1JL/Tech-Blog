console.log("All models");
// require other models
const Comment = require('./Comment');
const Post = require('./Post');
const User = require('./User');

// define relationship between models
Post.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
    foreignKey: 'postId',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

module.exports = {Comment, Post, User};