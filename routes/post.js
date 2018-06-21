const express = require ('express');
const router = express.Router ();
const Post = require (`../models/Post`);

// Обращение по адресу "http://localhost:5000/api/post" будет возвращать "GET"
router.get (`/`, async (req, res) => {
    const posts = await Post.find ({});
    res.status (200).json (posts);
});
// Обращение по адресу "http://localhost:5000/api/post" будет запиывать "POST"
router.post (`/`, async (req, res) => {
    const postData = {
        title: req.body.title,
        text: req.body.text
    };
    const post = new Post (postData);
    await post.save ();
    res.status (201).json (post);
});
// Обращение по адресу "http://localhost:5000/api/post/32" будет удалять длкумент с postId:23 "DELETE"
router.delete (`/:postId`, async (req, res) => {
    await Post.remove({_id: req.params.postId});
    res.status(200).json({
        message: `Удаленазапись с Id:${req.params.postId}`
    })
});

module.exports = router;