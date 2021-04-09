const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const request = require("supertest");

dotenv.config();

const {Type} = mongoose;

const postsRouter = require("./posts");
const { Post } = require("../models");

describe("Test Users endpoint", ()=> {
    const app = express();
    app.use("/posts", postsRouter);

    beforeAll(()=> 
    {
        mongoose.connect(DB_HOST, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(()=> app.listen(3000))
    );

    afterAll(()=> app.close());

    test("Test GET /posts", async ()=> {
        const response = await request(app).get("/posts");
        
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body.data.result)).toBeTruthy();
    });

    test("Test POST /posts", async ()=> {
        const newPostContent = {
            title: "New Post",
            description: "New Post description"
        };

        const response = await request(app)
                                .post("/posts")
                                .send(newPostContent);
        const {result} = response.body.data;
        
        expect(response.statusCode).toBe(201);
        expect(result._id).toEqual(Type.ObjectId);
        expect(result.title).toBe(newPostContent.title);
    });
})