let mongoose = require('mongoose');
let AutoIncrement = require('mongoose-sequence')(mongoose);


let orderSchema = new mongoose.Schema(
    {
    id: { type: Number},
    petId: { type: Number},
    quantity: { type: Number},
    shipDate: { type: String},
    status: { type: String},
    complete: { type: Boolean}
})

orderSchema.plugin(AutoIncrement, {id:'order_seq',inc_field: 'id'});

module.exports = mongoose.model('Order', orderSchema);