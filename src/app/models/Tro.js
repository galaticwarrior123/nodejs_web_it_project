const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const tro = new Schema({
    name: { type: String, maxLength: 255 },
    add: { type: String, maxLength: 255 },
    // description: { type: String, maxLength: 600 },
    // image: { type: String, maxLength: 255 },
    // createAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('dstro', tro,'ListTro');




