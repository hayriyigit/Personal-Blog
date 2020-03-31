const {model, Schema} = require("mongoose");

const blogSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    category: {
        type:String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    }

});

module.exports = model('blogs', blogSchema);