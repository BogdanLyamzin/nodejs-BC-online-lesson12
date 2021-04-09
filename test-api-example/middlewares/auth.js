const auth = (req, res, next)  => {
    if(!req.headers["Authorization"]){
        res.status(403).json({
            status:"error",
            message: "Missing Authorization header"
        })
    }
    next();
};

module.exports = auth;