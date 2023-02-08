const postservices = require("./posts.services");

const router = require("express").Router();

router.get("/posts", postservices.getAllPosts);

router.post("/posts", postservices.postNewPost);

router.get("/posts/:id", postservices.getPostById);

router.patch("/posts/:id", postservices.patchPost);

router.delete("/posts/:id", postservices.deletePost);

module.exports = router;
