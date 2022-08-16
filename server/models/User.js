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
				expirationTimestamp: Number
			}]
		}]
	}
});
module.exports = mongoose.model("User", userSchema);
