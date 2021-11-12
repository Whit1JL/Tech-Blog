const router = require("express").Router();
const { Comment, User, Post } = require("../../models");
const withAuth = require("../../utils/auth");

// post router
router.post("/", withAuth, (req, res) => {
    const body = req.body;
    console.log(req.session.userId);
    Post.create({ ...body, userId: req.session.userId })
        .then(newPost => {
            res.json(newPost);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});


// put router


// delete router