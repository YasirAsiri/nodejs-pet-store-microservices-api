let mongoose = require('mongoose');
let AutoIncrement = require('mongoose-sequence')(mongoose);


let userSchema = new mongoose.Schema(
    {
    id: { type: Number},
    username: {type: String},
    firstName: { type: String},
    lastName: { type: String},
    email: { type: String},
    password: { type: String},
    phone: { type: String},
    userStatus: { type: Number, default: 0}
})

userSchema.plugin(AutoIncrement, {id:'order_seq',inc_field: 'id'});

module.exports = mongoose.model('User', userSchema);