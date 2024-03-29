require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()

const jwt = require('jsonwebtoken')

app.use(express.json())
app.use(cors())

const generateAccessToken = user => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_HASH, {expiresIn: "5m"})
}

let refreshTokens = []

app.delete('/logout', (req,res)=>{
    refreshTokens = refreshTokens.filter(token => token !== req.body.token)
    res.sendStatus(204)
})

app.post('/token', (req,res)=> {
    const {refreshToken} = req.body
    if (refreshToken == null) return res.sendStatus(401)
    // if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_HASH, (err, user)=>{
        if(err) return res.sendStatus(403)
        const accessToken = generateAccessToken({walletId: user.walletId})
        console.log("New AccessToken created")
        res.json({refreshToken,accessToken})
    })
})

app.post('/login', (req,res)=>{
    const walletId = req.body.walletId
    const user = {walletId}
    const accessToken = generateAccessToken(user)
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_HASH)
    refreshTokens.push(refreshToken)
    console.log({accessToken, refreshToken})
    res.json({accessToken, refreshToken})
})

app.listen(process.env.AUTH_SERVER_PORT, function() {
    console.log("AuthServer is running on Port: " + process.env.AUTH_SERVER_PORT);
});