let mongoose = require("mongoose"),
    Schema = mongoose.Schema,

    UsersSchema = new Schema({
        username: {
          type: String,
          unique: true,
          required: true
        },
        password: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        zip: {
            type: Number,
            required: true
        },
        pid: [{
            type: Schema.Types.ObjectId, ref: 'Posts'
        }]
    });
let Users = mongoose.model("Users", UsersSchema);

// Export the model
module.exports = Users;
