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
		const temp = await User.findOne({walletId: req.body.walletId})
		if ( temp == null ) {
			await User.create({walletId: req.body.walletId})
		} else {
			console.log("already registeresd")
		}
		// res.json(user)
	}catch (e) {
		console.log(e.message)
	}
	// res.send()
})
app.get("/getsimpledata", authenticateToken, async (req,res)=>{
	console.log("cakked")
	const {walletId, accessToken, refreshToken} = req.body
	if(!req.body) return
	try {
		const temp = await User.find({})
		res.json(temp)
	}catch (e) {
		console.log(e.message)
	}
	// res.send()
})

//Testing queries
// async function run() {
// 	try{
// 		const user = await User.find({name: "Kylo"})
// 		console.log(user)
//
// 	} catch (e) {
// 		console.log(e.message)
// 	}
// }
// run()

app.listen(process.env.INDEX_PORT, function() {
	console.log("Server is running on Port: " + process.env.INDEX_PORT);
});