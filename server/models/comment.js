const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const commentSchema = new Schema({
    status: {
        type: String,
    },
    user : { type: Schema.Types.ObjectId, ref: 'User' },
},{
    timestamps : true
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment