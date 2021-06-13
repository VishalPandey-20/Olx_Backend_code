const jwt = require("jsonwebtoken")

const verify = (req, res, next) => {
    // console.log("req.headers.authorizationreq.headers.authorization", req.headers.authorization);
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1]
        console.log("tokentokentoken",token);
        const user = jwt.verify(token, "vishal")
    } else {
        return res.status(401).json({ message: "Authorization required" })
    }
    next()
}

module.exports = verify