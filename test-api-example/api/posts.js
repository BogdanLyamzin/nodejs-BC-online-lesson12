const express = require("express");

const {Post} = require("../models");

const router = express.Router();



router.get("/", async (req, res, next)=> {
    try {
        const result = await Post.find({});
        res.json({
            status: "success",
            code: 200,
            data: {
                result
            }
        });
    }
    catch(error){
        next(error)
    }
});

router.post("/", express.json(), async (req, res, next)=> {
    try {
        const newPost = new Post(req.body);
        const result = await newPost.save();
        res.json({
            status: "success",
            code: 200,
            data: {
                result
            }
        });
    }
    catch(error){
        next(error)
    }
});

module.exports = router;