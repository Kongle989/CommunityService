let mongoose = require("mongoose"),
    Schema = mongoose.Schema,

    PostsSchema = new Schema({

        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        postdate: {
            type: Date,
            required: true,
            default: Date.now
        },
        uid: {
            type: Schema.Types.ObjectId, ref: 'Users'
        }

    });
let Posts = mongoose.model("Posts", PostsSchema);

// Export the model
module.exports = Posts;
