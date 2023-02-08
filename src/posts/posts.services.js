const postControllers = require("./posts.controllers");

const postNewPost = (req, res) => {
    const postObj = req.body;
    if (!postObj.content || !postObj.userName) {
        return res.status(400).json({
            message: "notNull Violation: posts.content cannot be null",
        });
    }
    postControllers
        .createPost(postObj)
        .then((data) => {
            res.status(201).json(data);
        })
        .catch((err) => {
            res.status(400).json({
                message: "notNull Violation: posts.content cannot be null",
            });
        });
};

const getAllPosts = (req, res) => {
    postControllers
        .findAllPosts()
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
};

const getPostById = (req, res) => {
    const id = Number(req.params.id);

    postControllers
        .findPostById(id)
        .then((data) => {
            if (data) {
                res.status(200).json(data);
            } else {
                res.status(404).json({ message: "post not found" });
            }
        })
        .catch((err) => {
            res.status(400).json(err);
        });
};

const patchPost = (req, res) => {
    const id = req.params.id;
    const postObj = req.body;
    postControllers
        .updatePost(id, postObj)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
};

const deletePost = (req, res) => {
    const id = req.params.id;
    postControllers
        .deletePost(id)
        .then((data) => {
            if (data) {
                res.status(204).json();
            } else {
                res.status(404).json({ message: "Product not found" });
            }
        })
        .catch((err) => {
            res.status(400).json(err);
        });
};

module.exports = {
    getAllPosts,
    getPostById,
    postNewPost,
    deletePost,
    patchPost,
};
