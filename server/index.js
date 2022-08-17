require("dotenv").config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const User = require("./models/User.js")
const { authenticateToken } = require("./middleware/authenticateToken");

const app = express()

app.use(express.json())
app.use(cors())


mongoose.connect(`mongodb://melion:${process.env.MONGO_PASSKEY}@ac-vaxsrgl-shard-00-00.bbgmqhv.mongodb.net:27017,ac-vaxsrgl-shard-00-01.bbgmqhv.mongodb.net:27017,ac-vaxsrgl-shard-00-02.bbgmqhv.mongodb.net:27017/?ssl=true&replicaSet=atlas-evf9o0-shard-0&authSource=admin&retryWrites=true&w=majority`, {
	useNewUrlParser: true, 
	useUnifiedTopology: true 
});
const connection = mongoose.connection;

connection.once('open', function() {
	console.log("MongoDB database connection established successfully");
})

app.post("/login", async (req,res)=>{
	const {walletId} = req.body
	if(!req.body) return
	try {
		const temp = await User.findOne({walletId: walletId})
		if ( temp == null ) {
			await User.create({walletId: walletId})
		} else {
			console.log("already registeresd")
		}
		// res.json(user)
	}catch (e) {
		console.log(e.message)
	}
	// res.send()
})
app.get("/getsimpledata",  async (req,res)=>{
	// const {walletId, accessToken, refreshToken} = req.body
	if(req.body.n=="cool") res.send(new Error())
	console.log(req.body)
	try {

		const temp = await User.find({})
		res.json(temp)
	}catch (e) {
		res.send(e)
	}
})
app.get("/users",  async (req,res)=>{
	// const {walletId, accessToken, refreshToken} = req.body
	// if(!req.body) return
	// try {
	// 	const temp = await User.find({})
	console.log("users")
		res.json("users")
	// }catch (e) {
	// 	console.log(e.message)
	// }
})
app.get("/user", authenticateToken, async (req,res)=>{
	const {walletId} = req.user
	if(!req.body) return
	try {
		const response = await User.findOne({walletId: walletId})
		res.json(response)
	}catch (e) {
		console.log(e.message)
	}
})
app.post("/updateusername", authenticateToken,  async (req,res)=>{
	console.log('wtf', req.headers['authorization'])
	const {walletId, newUsername} = req.body
	if(!req.body) return
	try {
		await User.updateOne({walletId}, {username: newUsername})
		res.sendStatus(200)
	}catch (e) {
		console.log(e.message)
	}
})

app.listen(process.env.INDEX_PORT, function() {
	console.log("Server is running on Port: " + process.env.INDEX_PORT);
});