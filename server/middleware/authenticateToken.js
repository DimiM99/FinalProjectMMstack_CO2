const jwt = require('jsonwebtoken')
const authenticateToken = (req,res,next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token === null) return res.sendStatus(401)
    jwt.verify(token, process.env.ACCESS_TOKEN_HASH, (err,user) => {
        if(err){
            if(err.name === "TokenExpiredError"){
                res.statusMessage = "token_expired";
                res.status(403).end();
            }
            res.sendStatus(403)
        }
        req.user = user
        next()
    })
}
module.exports = { authenticateToken }