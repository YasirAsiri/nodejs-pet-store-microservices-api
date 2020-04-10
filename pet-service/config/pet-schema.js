let mongoose = require('mongoose');
let AutoIncrement = require('mongoose-sequence')(mongoose);


let petSchema = new mongoose.Schema(
    {
    id: { type: String},
    category: {
        id: { type: Number},
        name: { type: String}
    },
    name: { type: String},
    photoUrls: [{ data: Buffer, contentType: String}],
    tags: [
        {
            id: { type: Number},
            name: { type: String}
        }
    ],
    status: { type: String, enum: ['available', 'pending', 'sold']}
  
})

ItemSchema.plugin(AutoIncrement, {id:'order_seq',inc_field: 'order'});

module.exports = mongoose.model('Pet', petSchema)