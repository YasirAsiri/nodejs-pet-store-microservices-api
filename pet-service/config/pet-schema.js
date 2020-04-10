let mongoose = require('mongoose');
let AutoIncrement = require('mongoose-sequence')(mongoose);


let petSchema = new mongoose.Schema(
    {
    id: { type: Number},
    category: {
        id: { type: Number},
        name: { type: String}
    },
    name: { type: String, required: true},
    photoUrls: [{ type: String}],
    tags: [
        {
            id: { type: Number},
            name: { type: String}
        }
    ],
    status: { type: String, enum: ['available', 'pending', 'sold'], default: 'available'}
  
})

petSchema.plugin(AutoIncrement, {id:'order_seq',inc_field: 'id'});

module.exports = mongoose.model('Pet', petSchema)