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

app.post("/user",authenticateToken, async (req,res)=>{
	const {walletId} = req.body
	if(!req.body) return
	try {
		const user = await User.findOne({walletId})
		if ( user === null) {
			const newUser = await User.create({
				walletId: walletId
			})
			await newUser.save()
		}
		// else {
		// 		console.log("already registered")
		// 	}
		res.json(user)
	}catch (e) {
		console.log(e.message)
	}
})


app.post("/updateusername", authenticateToken,  async (req,res)=>{
	const {walletId, newUsername} = req.body
	if(!req.body) return
	try {
		await User.updateOne({walletId}, {username: newUsername})
		res.sendStatus(200)
	}catch (e) {
		console.log(e.message)
	}
})


app.post("/addList", authenticateToken, async (req,res)=>{
	const {walletId, listId, name, color} = req.body
	if(!req.body) return
	try {
		const user = await User.findOne({walletId})
		user.data.lists.push({ listId, name, color, data: [{}]})
		await user.save()
		res.sendStatus(200)
	}catch (e) {
		console.log(e.message)
	}
});

app.post("/deleteList", authenticateToken, async (req,res)=>{
	const {walletId, listObjectId} = req.body
	const id = mongoose.Types.ObjectId(listObjectId);
	if(!req.body) return
	try {
		await User.updateOne({walletId}, {$pull: {"data.lists": {_id: id}}})
		res.sendStatus(200)
	}catch (e) {
		console.log(e.message)
	}
})

app.post("/deleteTask", authenticateToken, async (req,res)=>{
	const {walletId, listObjectId, taskObjectId} = req.body
	const listId = mongoose.Types.ObjectId(listObjectId);
	const taskId = mongoose.Types.ObjectId(taskObjectId)
	if(!req.body) return
	try {

		const user = await User.findOne({walletId})
		let taskIndex;
		let listIndex;
		i = 0;
		user.data.lists.forEach(list => {
			j = 0;
			if ((list._id + "") === (listId + "")){
				list.data.forEach(task => {
					if((task._id + "") === (taskId + "")){
						taskIndex = j;
					}
					j += 1;
				})
				listIndex = i;
			}
			i += 1;
		});
		
		user.data.lists[listIndex].data.splice(taskIndex, 1)
		await user.save()
		res.sendStatus(200)
	}catch (e) {
		console.log(e.message)
	}
})



app.listen(process.env.INDEX_PORT, function() {
	console.log("Server is running on Port: " + process.env.INDEX_PORT);
});