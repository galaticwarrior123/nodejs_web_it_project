const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const tro = new Schema({
    name: { type: String, maxLength: 255 },
    add: { type: String, maxLength: 255 },
    page: { type: String, maxLength: 255 },
    slug: { type: String, maxLength: 255 },
    // description: { type: String, maxLength: 600 },
    image: { type: Array, maxLength: 255 ,default:[]},
    // createAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('dstro', tro,'ListTro');




