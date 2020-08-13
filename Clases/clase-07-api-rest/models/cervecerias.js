var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cerveceriasSchema = new Schema({
    id:{type: String},
    lat:{type: String},
    lng:{type: String},
    name:{type: String},
    description:{type: String},
    type: {type: String}
});

module.exports = mongoose.model('Cerveceria', cerveceriasSchema, 'cervecerias' );