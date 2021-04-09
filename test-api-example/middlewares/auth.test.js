const {NextFunction, Request, Response} = require("express");
const auth = require("./auth");

describe("Test auth middleware", ()=> {
    test("Without Authorization header", ()=> {
        expect( Request, Response, NextFunction).toCalledWith()
    })
});