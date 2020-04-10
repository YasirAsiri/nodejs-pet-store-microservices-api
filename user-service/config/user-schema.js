let mongoose = require('mongoose');
let AutoIncrement = require('mongoose-sequence')(mongoose);


let userSchema = new mongoose.Schema(
    {
    id: { type: Number},
    firstname: { type: String},
    lastname: { type: String},
    email: { type, String},
    password: { type, String},
    phone: { type, String},
    userStatus: { type: Number, default: 0}
})

ItemSchema.plugin(AutoIncrement, {id:'order_seq',inc_field: 'id'});

module.exports = mongoose.model('User', emailSchema);