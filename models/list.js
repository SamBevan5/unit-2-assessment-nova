const mongoose = require (`mongoose`);
const Schema = mongoose.Schema;

const listSchema = new Schema({
    name: {type:String, required: true},
    isComplete: Boolean
})

const List = mongoose.model(`List`, listSchema);

module.exports = List;