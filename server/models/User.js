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
		lists: [{
			id: Number,
			name: String,
			color: String,
			data: [{
				taskHeading: String,
				status: Boolean,
				expirationTimestamp: String
			}]
		}]
	}
});
module.exports = mongoose.model("User", userSchema);
