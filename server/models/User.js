const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	walletId: String,
	username: String,
	data: {
		tasksCount: {
			completed: Number,
			uncompleted: Number,
			total:Number
		},
		lists: [Object]
	},
	refreshTokens: [String]
});
module.exports = mongoose.model("User", userSchema);
